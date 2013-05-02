(function() {
  define([], function() {
    var Request;

    return Request = (function() {
      function Request() {}

      Request.prototype.properties = {};

      Request.prototype.messages = [];

      Request.prototype.getProperty = function(property) {
        return this.properties[property];
      };

      Request.prototype.setProperty = function(key, val) {
        this.properties[key] = val;
      };

      Request.prototype.addMessage = function(message) {
        if (message == null) {
          return;
        }
        this.messages.push(message);
        return message;
      };

      Request.prototype.getMessages = function() {
        return this.messages;
      };

      return Request;

    })();
  });

}).call(this);
