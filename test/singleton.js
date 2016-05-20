var Guide = Backbone.View.extend({
  initialize: function(){
    debugger;
    if (typeof this.instance() === 'object'){
      return this.instance();
    }
  },
  instance: Guide,
  Guide: function() {
    return this;
  }
});

var a = new Guide();
var b = new Guide();

a === b;
