const express = require('express');
const server = express();
const morgan = require('morgan');

server.get('/hello', (req, res) => {
    res.send("Hello................")
})

const cors = require('cors');

const configureRoutes = require('./config/routes.js');

server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());
 
configureRoutes(server);

module.exports = server;