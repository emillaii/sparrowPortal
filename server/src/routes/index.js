const express = require('express');
const router = express.Router();

const userRoutes = require('./user.router');
const todoRoutes = require('./todo.router');
const commandRoutes = require('./command.router');

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);
router.use('/command', commandRoutes);

module.exports = router;