View Helper
===========

    define [], () ->
      class ViewHelper
        renderView: (request) ->
          params = request.getProperty 'params'
          console.log "Foo: #{params.foo}"
        renderMessages: (request) ->
          for message in request.getMessages()
            console.log "Message: #{message}"

        