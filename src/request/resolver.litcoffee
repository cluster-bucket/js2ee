Invoker
=======

Resolves a request to a view. If there are messages we don't want to render the
main view. Instead we want to render the default view and display the messages.

    define ['../libs/q', '../views/default'], (Q, DefaultView) ->

      class Resolver
        getView: (request) ->
          dfr = Q.defer()
          cmd = "default"

          params = request.getProperty 'params'
          cmd = 'index' if params.foo?

          messages = request.getMessages()
          cmd = "default" if messages.length > 0

          path = "views/#{cmd}"
          require [path], (View) ->
            dfr.resolve new View()
          ,(err) ->
            dfr.resolve new DefaultView()

          dfr.promise
