angular.module('pllugFiles.account').
  factory('CurrentUser', ['$q', 'CurrentUserResource', function($q, CurrentUserResource) {
    var defered = $q.defer();

    CurrentUserResource.fetch(function(user) {
      defered.resolve(user);
    }, function(errors) {
      defered.reject(errors);
    });

    return defered.promise;

  }]);
