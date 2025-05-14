const mongoose = require('mongoose');


main().catch(err => console.log(err));

 main()
 .then(() => {
    console.log("Connection successful");
 })
 .catch((err) => console.log(err));
 async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  
}
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price:{
        type: String,
    },
    discount: {
        type: Number,
        default: 0,
    }
});

const Book = mongoose.model("Book",bookSchema);
let book1 = new Book({
    title: "C",
    author:"Dennis Ritchie",
    price: 800,
});
book1.save().then((res)=>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});