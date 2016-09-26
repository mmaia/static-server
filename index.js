/**
 * Created by mmaia on 9/23/16.
 */
'use strict'

const
  finalhandler = require('finalhandler'),
  http = require('http'),
  morgan = require('morgan'),
  express = require('express'),
  path = require('path'),
  app = express();

// create "middleware"
var logger = morgan('combined');

const staticPath = path.join(__dirname, '/public');
app.use(logger);
app.use(express.static(staticPath));
app.listen(3000, () => console.log('listening'));
