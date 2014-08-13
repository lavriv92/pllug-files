define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({

    initialize: function() {
      $('body').on('click', 'a:not(a[data-bypass])', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        Backbone.history.navigate(href, true);
      });
    },

    routes: {
      '': 'index',
      'test': 'test'
    },

    index: function() {
      console.log('index')
    },

    test: function() {
      console.log('test');
    }
  });

  var initialize = function() {
    var router = new AppRouter();
    Backbone.history.start({
      pushState: true
    });
  };

  return {
    initialize: initialize
  }
});
