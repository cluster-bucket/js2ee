Request Filter Manager
======================

The Request Filter Manager pre-processes an HTTP Request before it is
executed. It implements the [GoF Decorator Pattern][decorator] but its role in 
the system comes from the [Core J2EE Intercepting Filter Pattern][if]:

> The filters intercept incoming requests and outgoing responses, allowing 
preprocessing and post-processing. We are able to add and remove these filters 
unobtrusively, without requiring changes to our existing code.

The filters do not halt execution of the request. Instead, if something goes
wrong they just add a message to the request which will get handled later.

Each filter runs the next filter in the chain with a reference to the request
until there aren't any more filters to run. When the process is complete the 
modified request is returned to the calling class.

[decorator]: http://en.wikipedia.org/wiki/Decorator_pattern
[if]: http://www.oracle.com/technetwork/java/interceptingfilter-142169.html

    define [
      './request'
      './filters/querystring'
      './base'
    ], (Request, QuerystringFilter, BaseRequest) ->

      class FilterManager
        constructor: () ->
          @request = new Request()
        process: () ->
          process = new QuerystringFilter new BaseRequest
          process.process @request

