(function() {
  define([], function() {
    var View;

    return View = (function() {
      function View() {}

      View.prototype.execute = function(request) {
        console.log("View: " + this.constructor.name);
        return this.doExecute(request);
      };

      View.prototype.doExecute = function(request) {};

      return View;

    })();
  });

}).call(this);
