var models = require('./models'),
    File = models.File,
    Directory = models.Directory;

exports.directoriesList = function(req, res) {
  Directory.find({}, function(err, directories) {
    if (err) {
      res.json(err);
    } else {
      res.json(directories);
    }
  }) 
};

exports.childrenDirectoriesList = function(req, res) {
  var parentDir = req.body.parentDir; 
  Directory.find({parent: parentDir}, function(err, directories) {
    if(err) {
      res.json(err);
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
  }

  Directory.find(queryObj, function(err, files) {
    if(err) {
      res.json(err);
    } else {
      res.json(files);
    }
  });
};


exports.addDirectory = function(req, res) {
  var directory = Directory(req.body);
  directory.save(function(err, user) {
    if(err) {
      res.json(err);
    } else {
      res.json(user, 201);
    }
  });
};


exports.addFile = function(req, res) {
  res.send('addFile');
};


exports.removeFile = function(req, res) {
  res.send('remove file');
};
