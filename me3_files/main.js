if (window.jQuery) {
	define('jquery', [], function() {
		return jQuery;
	});
}

require.config({
  baseUrl: "/info",
  paths: {
    "iscroll": "iscroll-v5.1.3",
    "history": "jquery.history"
  },
  shim: {
    "iscroll": { exports: "IScroll" },
    "history": { deps: ["jquery"], exports: "History" },
    "jscroll": ["jquery", "iscroll"]
  }
});

// init module
require(["jquery"], function($) {
  /*
      initialize everything that needs to be called when the dom is ready
      or when the dom is updated via ajax
  */
  $(document).on("dom_ready dom_updated", function() {
	  
    $(window).on("resize", function() {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(function() {
        $(window).trigger("refresh");
      }, 200);
    });

    // init plugins
    require(['plugins-initializer'], function(pluginsInitializer) {
      pluginsInitializer.init();
    });
    
    if ($('.bio-wrap').length) {
      require(['bio-init']);
    }
    
    if ($('.stats-wrap').length) {
      require(['stats-init']);
    }

  });

  $(function() {	  
    $(document).trigger('dom_ready');
  });
});