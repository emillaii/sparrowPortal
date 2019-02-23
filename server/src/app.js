const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./config/mongoose');
const websocketClient = require('./config/websocketClient');
const app = express();
const routes = require('./routes');
const Docs = require('express-api-doc');

const dock = new Docs(app);
dock.track({
    path: './public/examples.txt',
});

mongoose.connect();
websocketClient.connect();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.listen(process.env.PORT || 8081)

module.exports = app;
