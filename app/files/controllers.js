var models = require('./models'),
    Storage = require('../storage'),
    config = require('../config');
    
var File = models.File,
    Directory = models.Directory;


exports.directoriesList = function(req, res) {
  Directory.find({}, function(err, directories) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(directories);
    }
  }); 
};


exports.childrenDirectoriesList = function(req, res) {
  var parentDir = req.body.parentDir; 
  Directory.find({parent: parentDir}, function(err, directories) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(directories);
    }
  });
};


exports.filesList = function(req, res) {
  var directory = req.query.directory,
      queryObj = {};

  if (directory) {
    queryObj.directory = directory;
  } else {
    res.status(400).json({
      'message': 'Directory must be not null'
    });
  }

  Directory.find(queryObj, function(err, files) {
    if(err) {
      res.status(404).json(err);
    } else {
      res.json(files);
    }
  });
};


exports.createDirectory = function(req, res) {
  var directory = Directory(req.body);
  var storage = new Storage(config.storagePath);

  storage.newDir(function(p) {
    directory.path = p;
    directory.save(function(err, directory) {
      if(err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(directory);
      }
    });
  },
  function(err) {
    res.status(500).json(err);
  });
};


exports.addFile = function(req, res) {
  var file = new File(req.body);
  var storage = new Storage(config.storagePath);

  storage.createFile(function(p) {
    file.path = p;
    file.save(function(err) {
      if(err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(file);
      }
    });
  }, 
  function(err) {
    res.status(500).json(err);
  });
};


exports.removeFile = function(req, res) {
  var storage = new Storage(config.storagePath);

  File.findOne({_id: req.params.id}, function(err, file) {
    if(err) {
      res.json(err);
    } else {
      storage.removeFile(function() {
        res.status(204).json({
          message: "File removed"
        });
      },
      function(err) {
        res.status(500).json(err);
      });
    }
  });
};

exports.removeDirectory = function() {
  var storage = new Storage(config.storagePath);

  Directory.findOne({_id: req.params.id}, function(err, directory) {
    if (err) {
      res.json(err);
    } else {
      storage.removeDirectory(function() {
        res.status(204).json({
          message: 'success'
        });
      }, function (err) {
        res.status(500).json(err);
      });
    }
  });
};
