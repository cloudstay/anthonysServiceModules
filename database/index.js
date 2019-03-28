var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost/fecTestDb';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var infoSchema = new Schema({
    info: String
  });


var InfoModel = mongoose.model('InfoModel', infoSchema );

//create model helpers

//export models