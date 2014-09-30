angular.module('pllugFiles.core').
  directive('leftPanel', ['CurrentUser', function(CurrentUser) {
    return {
      restrict: 'A',
      templateUrl: '/templates/core/left-panel.html',
      link: function(scope, elem) {

        var panel = $(elem).find('#menu');

        scope.hidden = true;

        CurrentUser.user.then(function(user) {
          scope.user = user;
        });

        scope.toggle = function() {
          $(panel).fadeToggle();
          scope.hidden = !scope.hidden;
        }     
      }
    };
  }]);
