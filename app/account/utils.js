var crypto = require('crypto');


exports.cryptPassword = function (password) {
  return crypto.createHash('sha256').update(password).digest('base64');
};


exports.requiresLogin = function(req, res, next) {
  if(req.session.user_id) {
    next();
  } else {
    res.json(403);
  }
}; 
