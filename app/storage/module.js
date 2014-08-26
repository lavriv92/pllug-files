var fs = require('fs'),
    path = require('path');

var storage = module.exports = function(fPath) {
  var self = this;
  this.path = this.path || '.';
};

storage.prototype = {
  getPath: function(dirPath) {
    return path.join(this.path, dirPath);
  },

  createDir: function(dirName) {
    fs.mkdir(this.getPath(dirName));
  };
};
