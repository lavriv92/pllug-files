var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var fileSchema = new Schema({
  name: {type: String},
  path: {type: String, unique: true},
  zise: {type: Number},
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  updated: {type: Date, default: Date.now},
  created: {type: Date, default: Date.now},
});


var directorySchema = new Schema({
  name: {'type': String},
  path: {'type': String, unique: true},
  parent: {'type': Schema.Types.ObjectId, ref: 'Directory'},
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File'
  }],
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now}
});


exports.File = mongoose.model('File', fileSchema);
exports.Directory = mongoose.model('Directory', directorySchema);
