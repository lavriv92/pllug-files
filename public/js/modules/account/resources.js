angular.module('pllugFiles.account').
  factory('UserResource', ['$resource', function ($resource) {
    return $resource('/api/v01/account/users/:id/:action', {id: '@id'}, {
      update: {method: 'PUT'}
    });
  }]);
