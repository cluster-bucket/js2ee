    define ['./process'], (ProcessRequest) ->
      class BaseRequest extends ProcessRequest
        process: (request) ->
          request
