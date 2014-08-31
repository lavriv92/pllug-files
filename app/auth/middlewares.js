exports.requiresLoginApi = function (req, res, next) {
  if(req.session.user !== undefined) {
    next();
  } else {
    res.status(403).json({
      message: "Permission denied."
    });
  }
};


exports.requiresLogin = function (req, res, next) {
    if(req.session && req.session.user !== undefined) {
      next();
    } else {
      res.redirect('/auth/sign-in/'); 
    }
};
