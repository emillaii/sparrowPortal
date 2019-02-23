var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  text: String,
  index: Number,
  done: Boolean
});

var User = mongoose.model("ToDo", ToDoSchema);
module.exports = User;