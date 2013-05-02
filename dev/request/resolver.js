(function() {
  define(['../libs/q', '../views/default'], function(Q, DefaultView) {
    var Resolver;

    return Resolver = (function() {
      function Resolver() {}

      Resolver.prototype.getView = function(request) {
        var cmd, dfr, messages, params, path;

        dfr = Q.defer();
        cmd = "default";
        params = request.getProperty('params');
        if (params.foo != null) {
          cmd = 'index';
        }
        messages = request.getMessages();
        if (messages.length > 0) {
          cmd = "default";
        }
        path = "views/" + cmd;
        require([path], function(View) {
          return dfr.resolve(new View());
        }, function(err) {
          return dfr.resolve(new DefaultView());
        });
        return dfr.promise;
      };

      return Resolver;

    })();
  });

}).call(this);
