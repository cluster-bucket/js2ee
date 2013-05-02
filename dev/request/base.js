(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['./process'], function(ProcessRequest) {
    var BaseRequest, _ref;

    return BaseRequest = (function(_super) {
      __extends(BaseRequest, _super);

      function BaseRequest() {
        _ref = BaseRequest.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      BaseRequest.prototype.process = function(request) {
        return request;
      };

      return BaseRequest;

    })(ProcessRequest);
  });

}).call(this);
