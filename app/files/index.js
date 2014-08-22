var express = require('express'),
    controllers = require('./controllers');

var files = module.exports = express.Router();

files.get('/directories', controllers.directoriesList);
files.get(
    '/directories/:dirId/children/', 
    controllers.childrenDirectoriesList
);
