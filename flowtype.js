/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/
if(!!Prototype.Version){
  Element.addMethods({
    flowtype: function(element, options){
      var settings = $H({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }).merge($H(options));
      
      changes = function() {
         var elw = element.getWidth(),
            width = elw > settings.get('maximum') ? settings.get('maximum') : elw < settings.get('minimum') ? settings.get('minimum') : elw,
            fontBase = width / settings.get('fontRatio'),
            fontSize = fontBase > settings.get('maxFont') ? settings.get('maxFont') : fontBase < settings.get('minFont') ? settings.get('minFont') : fontBase;
         element.setStyle('font-size:' + fontSize + 'px');
      };
      changes();
      Event.observe(window, 'resize', function(){
        changes();
      });
      return element;
    }
  });
}else{
  (function($) {
     $.fn.flowtype = function(options) {

  // Establish default settings/variables
  // ====================================
        var settings = $.extend({
           maximum   : 9999,
           minimum   : 1,
           maxFont   : 9999,
           minFont   : 1,
           fontRatio : 35
        }, options),

  // Do the magic math
  // =================
        changes = function(el) {
           var $el = $(el),
              elw = $el.width(),
              width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
              fontBase = width / settings.fontRatio,
              fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
           $el.css('font-size', fontSize + 'px');
        };

  // Make the magic visible
  // ======================
        return this.each(function() {
        // Context for resize callback
           var that = this;
        // Make changes upon resize
           $(window).resize(function(){changes(that);});
        // Set changes on load
           changes(this);
        });
     };
  }(jQuery));
}
