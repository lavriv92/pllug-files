'use strict';

pllugFiles
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/core/index.html',
        controller: 'IndexController'
      })
      .when('/account/:id/update', {
        templateUrl: '/templates/core/account.html',
        controller: 'UpdateController'
      })
      .when('/account/edit', {
        templateUrl: '/templates/account/edit.html',
        controller: 'AccountEditController'
      })
      .when('/files/:dirId', {
        templateUrl: '/templates/files/files-list.html',
        controller: 'DirectoriesListController'
      })
      .when('/files/home', {
        templateUrl: '/templates/files/files-list.html',
        controller: 'HomeDirectoryController'
      });
  
      $locationProvider.html5Mode(true).hashPrefix('!');
}]);

