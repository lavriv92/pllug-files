//Secures routes
const secureRouter = new Router();


//Middleware: authed
function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
  } else {
    this.redirect('/account/signin/');
  }
}

