angular.module('pllugFiles.core').
  controller('IndexController', ['$scope', 'User', function($scope, User) {
    $scope.$watch('choice', function(old, newV) {
      console.log(old);
      console.log(newV);

      $scope.a = newV;
    });
  }]); 
