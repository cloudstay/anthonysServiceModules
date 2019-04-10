const express = require('express');
const server = express();
const cors = require('cors');
const port = 3001;
const bodyParser = require('body-parser');
const db = require('../database/index.js');


server.use('/rooms/:id', express.static('./public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(cors());

 
server.listen(port, () => {
    console.log(`listening @ http://localhost:${port}`);
});



//create routes here


server.get('/api/rooms/:id/info', (req, res) => {
  console.log('a get request has been made');
  var id = req.params.id;
  db.getData(id, (error, data)=>{
    console.log(JSON.stringify(data))
    if (error){
      console.log(error);
    } else {
      res.send(JSON.stringify(data));
    }
  });
});


//test routes 

server.get('/api/testing', (req, res) => {
  console.log('a get request has been made');
  var id = req.params.id;
  db.getData(id, (error, data)=>{
    if (error){
      console.log(error);
    } else {
      res.send(data);
    }
  });
});