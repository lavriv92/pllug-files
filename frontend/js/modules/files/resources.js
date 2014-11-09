'use strict';

angular.module('pllugFiles.files')
  .factory('DirectoryResource', ['$resource', function($resource) {
    return $resource('/api/v01/files/directories/:pk/:action', {
      update: {'method': 'PUT'},
      children: {
        method: 'GET', 
        isArray: true, 
        params: {
          action: children
        }
      }
    });
  }])
  .factory('FilesResource', ['$resource', function($resource) {
    return $resource('/api/v01/files/files', {
      update: {method: 'PUT'}
    });
  }]);
