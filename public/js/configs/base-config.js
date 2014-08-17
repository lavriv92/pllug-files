pllugFiles.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<a href="#!/test">test</a>',
    controller: 'IndexController'
  }).
  when('/files', {
    template: '<a href="/">index</a>',
    controller: function($scope) {
      console.log('test');
    }
  })
  
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);

