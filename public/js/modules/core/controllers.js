angular.module('pllugFiles.core').
  controller('IndexController', ['$scope', 'UserResource',
      function($scope, UserResource) {
    UserResource.query(function(users) {
      $scope.users = users;
    });
  }]).
  controller('UpdateController', ['$scope', '$routeParams', 'UserResource', 
      function($scope, $routeParams, UserResource) {
        UserResource.get({id: $routeParams.id}, function(user) {
          $scope.user = user;
          console.log(user);
        });

        $scope.save = function() {
          $scope.user.$update(function(user) {
          
          }, function(errors) {
            $scope.errors = errors;
          });
        }
      }]);
