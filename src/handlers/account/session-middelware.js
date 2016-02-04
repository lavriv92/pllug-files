//Middleware: authed
module.exports = function *authed(next){
	console.log('[data]');
  if (this.req.isAuthenticated()){
    this.body = yield this.redirect('/');
  } else {
    //Set redirect path in session
    //this.session.returnTo = this.session.returnTo || this.req.url;
    this.body = yield this.redirect('/account/signin');
  }
}

