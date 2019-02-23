const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const { handler: errorHandler } = require('../utils/error');
var mongoose = require('mongoose');
var User = require('../models/user');

exports.list = (req, res) => {
	User.find({}, function (error, users) {
      if (error) { console.error(error); }
      res.send(users)
    })
};

exports.get = (req, res) => {
    User.find({email: req.body.email}, function (error, user) {
      if (error) { console.error(error); }
      res.send(user)
    })
};

exports.login = async(req, res, next) => {
	try {
		User.find({email: req.body.email, password: req.body.password}, function (error, user) {
		  if (user.length > 0) res.send(user[0]);
		  else {
		  	let error = new APIError({
	        	message: 'Login fail',
	        	status: httpStatus.NOT_FOUND
	    	});
	    	return errorHandler(error, req, res);
		  }
		});
	}catch (error) {
		return errorHandler(error, req, res);
	}
}

