const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));

// DB connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'Sadanand@123',
});

// Function to return a fake user (4 fields)
let getRandomUser = () => {
  return [
    faker.string.uuid(),              
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),        
  ];
};






// Faker example
app.get("/", (req , res) => {
  let q=` SELECT count(*) FROM user`;
  try {
      connection.query(q, (err, results) => {
        if (err) throw err;
      //  let count = (results[0]["count(*)"]); // fixed typo: result → results
        res.render("show.ejs",{count}); // moved inside callback to ensure it's closed after query
      });
    } catch (err) {
      console.log(err);
      res.send("some error in DB");
    }

});

app.get("/user", (req, res )=> {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
     
     res.render("showuser",{users}); 
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }

});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
     let user = result[0];
      res.render("edit.ejs",{user});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
  


});

//Update Route

app.patch("/user/:id", (req, res) => {
 
  let { id } = req.params;
  let {password: formPass, username: newUsername}= req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
     let user = result[0];
     if(formPass != user.password){
      res.send("Wrong password");
     }else{
         let q2 = `UPADTE user SET username='${newUsername} 'WHERE id = '${id}`;
         connection.query(q2, (err , result) => {
          if(err) throw err;
          res.send(result);
         });
     }
      
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
})

app.listen("8080", () => {
  console.log("server is listing to port 8080");
});
