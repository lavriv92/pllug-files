var fs = require('fs'),
    path = require('path');

var storage = module.exports = function(fPath) {
  var self = this;
  this.path = fPath || '.';
};


storage.prototype = {
  getPath: function(dirPath) {
    return path.join(this.path, dirPath);
  },

  newDir: function(name, successCallback, errorCallback) {
    var p = this.getPath(name);
    fs.mkdir(p, function(err) {
      if(err) {
        errorCallback(err);
      } else {
        successCallback(p);
      }
    });
  },

  rmDir: function(name, successCallback, errorCallback) {
    fs.rmdir(this.getPath(name), function(err) {
      if(err) {
        errorCallback(err);
      } else {
        successCallback(name);
      }
    });
  },

  renameDir: function(oldPath, newPath, successCallback, errorCallback) {
    fs.rename(
      this.getPath(oldPath),
      this.getPath(newPath),
      function(err) {
        errorCallback(err);
      } else {
        successCallback();
      }
    );
  },

  createFile: function(fpath, content) {
    fs.writeFile(this.getPath(fpath), content, function(err) {
      if(err) {
        next(err);
      }
    });
  },

  removeFile: function(fpath) {
    fs.unlinlFile(this.getPath(fpath), function(err) {
      if(err) {
        next(err);
      }
    });
  }
};
