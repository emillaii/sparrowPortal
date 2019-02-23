const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const websocketClient = require('../config/websocketClient');

exports.post = (req, res) => {
	console.log(req.body);
	if (websocketClient.sendMessage(req.body))
	{
		res.send({
	      success: true,
	      message: 'Command sent successfully!'
	    })
	} else {
		res.send({
	      success: false,
	      message: 'Cannot send command!'
	    })
	}
}
