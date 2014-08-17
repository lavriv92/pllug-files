var mongoose = require('mongoose'),
    schema = mongoose.Schema;


var fileObjectSchema = new Schema({
  name: {type: String},
  path: {type: String, unique: true},
  zise: {type: Number},
  updated: {type: Date, default: Date.now},
  created: {type: Date, default: Date.now},
});


exports.FileObject = mongoose.model('FileObject', fileObjectSchema);


