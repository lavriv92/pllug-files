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
    var oldp = this.getPath(oldPath),
        newp = this.getPath(newPath);
    fs.rename(oldp, newp, function(err) {
        if(err) {
          errorCallback(err);
        } else {
          successCallback(newp);
        }
      }
    );
  },

  createFile: function(fpath, content, successCallback, errorCallback) {
    var p = this.getPath(fpath);
    fs.writeFile(p, content, function(err) {
      if(err) {
        errorCallback(err);
      } else {
        successCallback(p);
      }
    });
  },

  removeFile: function(fpath, successCallback, errorCallback) {
    var p = this.getPath(fpath);
    fs.unlinkFile(p, function(err) {
      if(err) {
        errorCallback(err);
      } else {
        successCallback(p);
      }
    });
  }
};
