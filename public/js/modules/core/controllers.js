angular.module('pllugFiles.core').
  controller('IndexController', ['$scope', 'User', function($scope, User) {
    $scope.$watch('choice', function(old, newV) {
      console.log(old);
      console.log(newV);

      $scope.a = newV;
    });
  }]).
  controller('UpdateController', ['$scope', '$routeParams', 'UserResource', 
      function($scope, $routeParams, UserResource) {
        UserResource.get({id: $routeParams.id}, function(user) {
          $scope.user = user;
        });

        $scope.save = function() {
          $scope.user.$update(function(user) {
          
          }, function(errors) {
            $scope.errors = errors;
          });
        }
      }]);
