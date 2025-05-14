const mongoose = require('mongoose');


main().catch(err => console.log(err));

 main()
 .then(() => {
    console.log("Connection successful");
 })
 .catch((err) => console.log(err));
 async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  
}
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
}); 
const User = mongoose.model("User",userSchema);

User.deleteOne({name: "Sada"}).then((res)=>{
    console.log(res);
});




// User.findOneAndUpdate({name: "Sada"},{age:21},{new:true}).then((res)=> {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.updateMany({age: {$gt: 20 } },{age:22}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })
// const user1 = new User({
//     name:"Sada",
//     email:"sada@gmail.com",
//     age:21,
// });
// user1.save();

// User.insertMany([
//     {name:"Sada",email:"sada@gmail.com",age:20},
//     {name:"Modiji",email:"modiji@gmail.com",age:21},
// ]).then((res)=> {
//     console.log(res);
// });

// User.findById("680a22beea864040b85de8c2").then((res)=> {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });