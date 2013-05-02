(function() {
  define(['./request', './filters/querystring', './base'], function(Request, QuerystringFilter, BaseRequest) {
    var FilterManager;

    return FilterManager = (function() {
      function FilterManager() {
        this.request = new Request();
      }

      FilterManager.prototype.process = function() {
        var process;

        process = new QuerystringFilter(new BaseRequest);
        return process.process(this.request);
      };

      return FilterManager;

    })();
  });

}).call(this);
