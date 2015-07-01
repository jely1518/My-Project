define(['jquery'], function($) {
	
  var pluginsMap = {
    '[data-jscroll="true"]': 'jscroll'
  }
	
  function initializePlugins() {
    $.each(pluginsMap, function(domSelector, pluginName) {
      var elements = $(domSelector);
      elements.each(function() {
        var el = $(this);
        if (!el.data(pluginName + '_initialized')) {
          require([pluginName], function() {
            el[pluginName](el.data());
            el.data(pluginName + '_initialized', true);
          });
        }
      });
    });
  };

  return {
    init : initializePlugins
  };
});