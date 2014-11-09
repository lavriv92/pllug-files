'use strict'

angular
  .module('pllugFiles.files')
    .controller('FileListController', ['$scope', function($scope) {
      $scope.files = [];
      $scope.addFiles = function() {};
    }])
    .controller('HomeDirectoryController', ['$scope', function($scope) {
      
    }])
    .controller('DirectoriesListController', ['$scope', function($scope) {
    
    }]);
