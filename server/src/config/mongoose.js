const mongoose = require('mongoose');

// Exit application on error
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });
/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
  mongoose.connect('mongodb://localhost:27017/sparrowQ', {
    keepAlive: 1,
    useNewUrlParser: true
  });
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function(callback){
    console.log("Connection Succeeded");
  });
};