Request
=======

The request object is responsible for storing request-specific information.

The ONLY items that belong in this object are URL values such as hostname,
and extracted route values (e.g. version, challenge, and forum), parameters,
hash values, and any data that is in a cookie including session tokens and
visit IDs. Think of it like PHP's $_REQUEST object.

ALL other data should be set in either the Registry or the Config objects.

    define [], () ->
      class Request
        properties: {}
        messages: []

        getProperty: (property) ->
          @properties[property]

        setProperty: (key, val) ->
          @properties[key] = val
          return

        addMessage: (message) ->
          return unless message?
          @messages.push message
          message

        getMessages: () ->
          @messages
