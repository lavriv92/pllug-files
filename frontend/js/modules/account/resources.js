'use strict';

angular.module('pllugFiles.account').
  factory('UserResource', ['$resource', function ($resource) {
    return $resource('/api/v01/account/users/:id/:action', {id: '@id'}, {
      update: {method: 'PUT'}
    });
  }])  
  .factory('CurrentUserResource', ['$resource', function($resource) {
    return $resource('/api/v01/account/current', {}, {
      fetch: {method: 'GET', isArray: false}
    });
  }]); 
