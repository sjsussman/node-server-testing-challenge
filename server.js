const express = require('express');

const petRouter = require('./routing/petRouter.js');

const server = express();

server.use(express.json());
server.use('/api/', petRouter);

module.exports = server;