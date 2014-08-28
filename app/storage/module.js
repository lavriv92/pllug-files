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

  newDir: function(name, next) {
    fs.mkdir(this.getPath(name), function(err) {
      if(err) {
        next(err);
      }
    });
  },

  rmDir: function(name, next) {
    fs.rmdir(this.getPath(name), function(err) {
      if(err) {
        next(err);
      }
    });
  },

  renameDir: function(oldPath, newPath, next) {
    fs.rename(
      this.getPath(oldPath),
      this.getPath(newPath),
      function(err) {
        next(err);
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
