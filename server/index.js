const express = require('express');
const server = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

server.use(express.static('./public/dist'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

 
server.listen(port, () => {
    console.log(`listening @ http://localhost:${port}`);
});

server.get('/some', (req, res) => {
  console.log('message from client: a get request has been made');
  res.send('message from server: your get request was successful')
});

//create routes here