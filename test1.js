//modules
const express = require("express");
const fs = require('fs');

//objects
const app = express();

//setting body format
app.use(express.json());

// constant parameters
const POST_route = "/";         // boh
const server_port = 3000;     // 3000

//recover useful data from a file
fs.readFile('configuration_file.txt', function(err, file_content) {
    console.log('start');
    console.log(file_content);
    console.log('end');
    console.log(err);
});


/*
app.get('/intro',function(req,res){
  res.send('');
});
*/


app.post(POST_route, function(req,res){
  //res.json(req.body);
  console.log("POST request: ");
  console.log(req.body);
});

app.listen(server_port,() => {
  console.log("Started on PORT 3000");
})