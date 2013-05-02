requirejs.config({
  enforceDefine: true
});

// Application
// -----------
//
// Require the main application file, but don't use `require()`. Here's why:
//
// > If you do set enforceDefine: true, and you use data-main="" to load your main
// JS module, then that main JS module must call define() instead of require()
// to load the code it needs. The main JS module can still call require/requirejs
// to set config values, but for loading modules it should use define().
//
// See [Handling Errors](http://requirejs.org/docs/api.html#errors) for more
// information about how errbacks are used in conjunction with enforceDefine.
define(['app'], function(ApplicationController) {
  ApplicationController.run();
});
