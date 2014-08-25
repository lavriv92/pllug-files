var fs = require('fs'),
    path = require('path');

var storage = module.exports = function(fPath) {
  var self = this;
  this.path = this.path || '.';
};

storage.prototype = {
  createDir: function() {
    console.log('');
  };
};
