var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String
});

var Post = mongoose.model("Post", PostSchema);

exports.list = function(req, res){
   User.find({}, function (error, users) {
    if (error) { console.error(error); }
     console.log(users);
     res.send({
       users: users
     })
   }).sort({_id:-1})

};

module.exports = Post;