(function() {
  define(["request/manager", "request/controller"], function(FilterManager, RequestController) {
    var ApplicationController;

    return ApplicationController = (function() {
      function ApplicationController() {}

      ApplicationController.run = function() {
        var controller;

        controller = new ApplicationController();
        controller.processRequest();
      };

      ApplicationController.prototype.processRequest = function() {
        var filter, request;

        filter = new FilterManager();
        request = filter.process();
        RequestController.run(request);
      };

      return ApplicationController;

    })();
  });

}).call(this);
