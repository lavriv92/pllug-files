angular.module('pllugFiles.account')
  .factory('CurrentUser', ['$q', 'CurrentUserResource', 
      function($q, CurrentUserResource) {
    var obj = {};
    obj.user = $q.defer();
    CurrentUserResource.fetch(function(user) {
      obj.user.resolve(user); 
    }, function(errors) {
      obj.user.reject(errors);
    });
    obj.update = function(data, successCallback, errorCallback) {
      
    };
    return obj;
  }]);
