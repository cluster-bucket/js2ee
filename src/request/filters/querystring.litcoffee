    define [
      './decorator'
    ], (RequestDecorator) ->
      class QuerystringFilter extends RequestDecorator
        parse: () ->
          queryAsAssoc = {}
          queryString = unescape(top.location.search.substring(1))
          keyValues = queryString.split(/&amp;/)
          for i of keyValues
            key = keyValues[i].split(RegExp("="))
            queryAsAssoc[key[0]] = key[1] if key[1]?
          queryAsAssoc

        process: (@request) ->
          params = @parse()
          @request.setProperty 'params', params
          @handler.process @request
