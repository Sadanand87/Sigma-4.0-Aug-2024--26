const express = require('express')
const app = express()
let port = 8080;
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(`app listing on port ${port}`);
});

app.use((req, res) => {
     console.log("request recived");
});