const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/command.controller');

const router = express.Router();

router
  .route('/post')
  .post(controller.post);

module.exports = router;