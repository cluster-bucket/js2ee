(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['./decorator'], function(RequestDecorator) {
    var QuerystringFilter, _ref;

    return QuerystringFilter = (function(_super) {
      __extends(QuerystringFilter, _super);

      function QuerystringFilter() {
        _ref = QuerystringFilter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QuerystringFilter.prototype.parse = function() {
        var i, key, keyValues, queryAsAssoc, queryString;

        queryAsAssoc = {};
        queryString = unescape(top.location.search.substring(1));
        keyValues = queryString.split(/&amp;/);
        for (i in keyValues) {
          key = keyValues[i].split(RegExp("="));
          if (key[1] != null) {
            queryAsAssoc[key[0]] = key[1];
          }
        }
        return queryAsAssoc;
      };

      QuerystringFilter.prototype.process = function(request) {
        var params;

        this.request = request;
        params = this.parse();
        this.request.setProperty('params', params);
        return this.handler.process(this.request);
      };

      return QuerystringFilter;

    })(RequestDecorator);
  });

}).call(this);
