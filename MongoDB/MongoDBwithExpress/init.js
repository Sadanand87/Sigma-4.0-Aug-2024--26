const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  
}
let allChats = [
    {
        from: "Sada",
        to: "Nand",
        msg: "send me notes for the exam",
        created_at: new Date(),

    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "X",
        to: "Y",
        msg: "teach me JAVA NOTES",
        created_at: new Date(),
    },
]
 Chat.insertMany(allChats);

