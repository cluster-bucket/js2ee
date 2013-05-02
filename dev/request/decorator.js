(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['./process'], function(ProcessRequest) {
    var RequestDecorator;

    return RequestDecorator = (function(_super) {
      __extends(RequestDecorator, _super);

      function RequestDecorator(handler) {
        this.handler = handler;
      }

      return RequestDecorator;

    })(ProcessRequest);
  });

}).call(this);
