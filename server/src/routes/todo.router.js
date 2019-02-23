const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/todo.controller');
const {
    list,
    post
} = require('../validations/user.validation');

const router = express.Router();

router
  .route('/list')
  .get(controller.list);

router
  .route('/post')
  .post(controller.post);

module.exports = router;