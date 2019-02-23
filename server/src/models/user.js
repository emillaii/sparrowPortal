var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  roles: [String],
  token: String,
  introduction: String,
  avatar: String,
  name: String,
  email: String,
  password: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;