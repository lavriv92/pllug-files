var crypto = require('crypto');


exports.cryptPassword = function (password) {
  return crypto.createHash('sha256').update(password).digest('base64');
};
