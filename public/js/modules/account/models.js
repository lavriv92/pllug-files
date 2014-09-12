angular.module('pllugFiles.account').factory('user', ['$resource', function($resource){return $resource('/api/v01/account/users/:pk', {'id': '@id'})  }]);
