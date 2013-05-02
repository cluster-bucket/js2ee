Application Controller
======================

All requests originate here.

1. Create request object
2. Populate the object with the Intercepting Filter (Decorator Pattern)
3. Resolve the request to a view/command via a Front Controller (Command Pattern)

Static convenience method that calls processRequest and registerListeners

    define [
      "request/manager"
      "request/controller"
    ], (FilterManager, RequestController) ->

      class ApplicationController
        @run: () ->
          controller = new ApplicationController()
          controller.processRequest()
          return

        processRequest: () ->
          filter = new FilterManager()
          request = filter.process()
          RequestController.run request
          return

