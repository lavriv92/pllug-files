var User = $resource('/api/v01/account/users/:id/:action', {userId:'@id'});
var user = User.get({userId:123}, function() {
  user.abc = true;
  user.$save();
});
