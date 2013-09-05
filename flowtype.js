/*
* If you create a derivative, please leave this text intact:
*
* FlowType.JS 1.0
* Copyright (c) 2013, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35,
         lineRatio : 1.45,
         useEm: false
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            unit = 'px',
            elw = $el.width(); 

            if (settings.useEm) {
               unit = 'em';
               elw = elw / parseFloat($('body').css('font-size'));
            }

            var width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
               fontBase = width / settings.fontRatio,
               fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;

            $el.css({
               'font-size'   : fontSize + unit,
               'line-height' : settings.useEm ? settings.lineRatio + unit : fontSize * settings.lineRatio + unit
            });
      };

// Make the magic visible
// ======================
      return this.each(function() {
         
      // Context for resize callback
         var that = this;
         
      // Set changes on load
         changes(this);
         
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      });
   };
}(jQuery));
