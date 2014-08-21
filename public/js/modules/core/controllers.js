angular.module('pllugFiles.core').
  controller('IndexController', ['$scope', function($scope) {
    $scope.data = [{
      name: 'test1',
    }, 
    {
      name: 'test2'
    }];

    $scope.name = 'dsadsadas';

    $scope.save = function() {
      alert($scope.name);
    }

    console.log('test');  
  }]);
