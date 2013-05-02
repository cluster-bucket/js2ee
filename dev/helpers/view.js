(function() {
  define([], function() {
    var ViewHelper;

    return ViewHelper = (function() {
      function ViewHelper() {}

      ViewHelper.prototype.renderView = function(request) {
        var params;

        params = request.getProperty('params');
        return console.log("Foo: " + params.foo);
      };

      ViewHelper.prototype.renderMessages = function(request) {
        var message, _i, _len, _ref, _results;

        _ref = request.getMessages();
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          message = _ref[_i];
          _results.push(console.log("Message: " + message));
        }
        return _results;
      };

      return ViewHelper;

    })();
  });

}).call(this);
