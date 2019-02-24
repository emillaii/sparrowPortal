const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/user.controller');
const {
    get,
    post,
    list,
    register,
    login
} = require('../validations/user.validation');

const router = express.Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router
  .route('/list')
  .get(controller.list);

router
  .route('/login')
  .post(controller.login);

module.exports = router;