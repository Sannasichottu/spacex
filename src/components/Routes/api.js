const express = require('express');

const launchesRouter = require('./Launches');

const api = express.Router();

api.use('/launches',launchesRouter);

module.exports= api;