'use strict';

angular.module('pllugFiles.account')
.factory('User', ['$resource', function($resource) {
  return $resource('/api/v01/account/users/:pk/:action', {'id': '@id'}, {
    'change_password': {method: 'POST', params: {'action': 'change_password'}}
  });  
}]);
