const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const { handler: errorHandler } = require('../utils/error');
var mongoose = require('mongoose');
var ToDo = require('../models/todo');

exports.list = (req, res) => {
	ToDo.find({}, function (error, todo) {
      if (error) { console.error(error); }
      res.send(todo)
    }).select("-__v")
};

exports.post = (req, res) => {
	var new_todo = new ToDo(req.body);
	new_todo.save(function (error) {
		if (error) {
			console.log(error);
			res.send({
		      success: false,
		      message: error
		    })
		} else {
			res.send({
		      success: true,
		      message: 'ToDo saved successfully!'
		    })
		}
	})
}
