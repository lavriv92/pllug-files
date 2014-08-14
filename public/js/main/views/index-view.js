define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var IndexView = Backbone.View.extend({
    el: $('#main'),

    template: _.template(index_template),

    render: function() {
      this.$el.html(this.template);
    }
  });

  return IndexView;
});
