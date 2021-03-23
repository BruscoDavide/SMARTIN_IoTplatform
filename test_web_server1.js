const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json())

app.get('/intro',function(req,res){
  res.send('Data receiver system');
  //res.sendfile("index.html");
});

app.post('/',function(req,res){
  //var measure = req.body.measure;
  //var measureType = req.body.measureType;
  res.json(req.body);
  console.log("POST request: ");
  //console.log("Measure = "+measure+", Measure Type =  "+measureType);
  console.log(req.body);
});

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})
