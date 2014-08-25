var models = require('./models'),
    File = models.File,
    Directory = models.Directory;

exports.directoriesList = function(req, res) {
  Directory.find({}, function(err, directories) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(directories);
    }
  }) 
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


exports.addDirectory = function(req, res) {
  var directory = Directory(req.body);
  directory.save(function(err, user) {
    if(err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(user);
    }
  });
};


exports.addFile = function(req, res) {
  var file = new File(req.body);
  file.save(function(err, file) {
      if(err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(file);
      }
  });
};


exports.removeFile = function(req, res) {
  res.send('remove file');
};
