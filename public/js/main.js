'use strict';
require.config({
  paths: {
    jquery: '../libs/jquery/dist/jquery',
    underscore: '../libs/underscore/underscore',
    backbone: '../libs/backbone/backbone',
    text: '../libs/requirejs-text/text'
  },

  shime: {
    jquery: {
      deps: [],
      exports: '$'
    },

    underscore: {
      deps: [],
      exports: '_'
    },

    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require([
  'app'    
], function(App) {
  App.initialize();
});
