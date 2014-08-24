pllugFiles.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/templates/core/index.html',
    controller: 'IndexController'
  }).
  when('/account/:id/update', {
    templateUrl: '/templates/core/account.html',
    controller: 'UpdateController'
  });
  
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);

