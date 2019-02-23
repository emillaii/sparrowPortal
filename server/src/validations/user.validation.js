const Joi = require('joi');

let paymentinfo =  {
    transactioncode: Joi.string().required(),
    productid: Joi.string().required(),
    paymenttime: Joi.string().required(),
    paymentvalue: Joi.number()
};

module.exports = {
    get: {
        params: {
            userId: Joi.string().required()
        }
    }
}