pllugFiles.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<input ng-model="name"> <button ng-click="save()">save</button> {{ name }}',
    controller: 'IndexController'
  }).
  when('/test', {
    template: '<input ng-model="ob.name">',
    controller: function($scope) {
      console.log('test');
    }
  })
  
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);

