const express = require("express");
const app = express();
const db = request('./db')

app.use(express.json())

app.get('/intro',function(req,res){
  res.send('Data receiver system');
  //res.sendfile("index.html");
});

// i have suppose that the POST request is composed by two infromations: id of the device/sensor, measurement

app.post('/',function(req,res){
  //var measure = req.body.measure;
  //var measureType = req.body.measureType;
  res.json(req.body);
  console.log("POST request: ");
  //console.log("Measure = "+measure+", Measure Type =  "+measureType);
  console.log(req.body);

  //db
  id = req.body.id // check how to access to the value by the key
  measure = req.body.measurement 
  timestamp = Date()

  try {
      await db.addMeasurement(id, measure, timestamp)
  } catch (error) {
    // managing the kinds of possible errors
  }
});

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})
