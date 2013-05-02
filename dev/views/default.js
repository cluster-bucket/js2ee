(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['./view', '../helpers/view'], function(View, ViewHelper) {
    var DefaultView, _ref;

    return DefaultView = (function(_super) {
      __extends(DefaultView, _super);

      function DefaultView() {
        _ref = DefaultView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DefaultView.prototype.doExecute = function(request) {
        var viewHelper;

        viewHelper = new ViewHelper();
        return viewHelper.renderMessages(request);
      };

      return DefaultView;

    })(View);
  });

}).call(this);
