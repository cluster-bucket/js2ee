(function() {
  define(['./resolver'], function(Resolver) {
    var RequestController;

    return RequestController = (function() {
      function RequestController(request) {
        this.request = request;
      }

      RequestController.run = function(request) {
        var controller;

        controller = new RequestController(request);
        controller.handle();
      };

      RequestController.prototype.handle = function() {
        var resolver,
          _this = this;

        resolver = new Resolver();
        return resolver.getView(this.request).then(function(View) {
          return View.execute(_this.request);
        });
      };

      return RequestController;

    })();
  });

}).call(this);
