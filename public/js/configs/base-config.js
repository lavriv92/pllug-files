pllugFiles.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: function($scope) {
      alert("hello");
    }

    $locationProvider.html5Mode(true).hashPrefix('!');
  }) 
}]);

