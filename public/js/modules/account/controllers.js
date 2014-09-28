angular.module('pllugFiles.account').
  controller('AccountController', ['$scope', 'User', function($scope, User) {
    User.query({}, function(data) {
      $scope.users = data;
    });
  }]);
