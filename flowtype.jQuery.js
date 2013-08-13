/*
* If you create a derivative, please leave this text intact:
*
* FlowType.JS 1.0
* Copyright 2013, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under a Creative Commons Attribution-ShareAlike
* 3.0 Unported License. Learn more about this license at:
* http://creativecommons.org/licenses/by-sa/3.0/deed.en_US
*/

(function($) {
   $.fn.flowtype = function( options ) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35,
         lineRatio : 1.45
      }, options);
      var $element = $(this);


// Set on page load
// ================

   // Set max and min thresholds
      if ( $element.width() > settings.maximum ) {
         var $width = settings.maximum;
      } else if ( $element.width() < settings.minimum ) {
         var $width = settings.minimum;
      } else {
         var $width = $element.width();
      }

   // Do the magic math
      var $fontBase = $width / settings.fontRatio;

   // Set max and min font-size
      if ( $fontBase > settings.maxFont ) {
         var $fontSize = settings.maxFont;
      } else if ( $fontBase < settings.minFont ) {
         var $fontSize = settings.minFont;
      } else {
         var $fontSize = $fontBase;
      }

   // Do more math
      var $lineHeight = $fontSize * settings.lineRatio;

   // Make CSS "changes"
      function changes() {
         $element.css({
            'font-size':$fontSize + 'px',
            'line-height':$lineHeight + 'px'
         });
      }

   // Run CSS "changes"
      changes();



// Update on resize
// ================
      $(window).resize(function() {

      // Set max and min thresholds
         if ( $element.width() > settings.maximum ) {
            var $width = settings.maximum;
         } else if ( $element.width() < settings.minimum ) {
            var $width = settings.minimum;
         } else {
            var $width = $element.width();
         }

      // Do the magic math
         var $fontBase = $width / settings.fontRatio;

      // Set max and min font-size
         if ( $fontBase > settings.maxFont ) {
            var $fontSize = settings.maxFont;
         } else if ( $fontBase < settings.minFont ) {
            var $fontSize = settings.minFont;
         } else {
            var $fontSize = $fontBase;
         }      

      // Do more math
         var $lineHeight = $fontSize * settings.lineRatio;

      // Make CSS "changes"
         function changes() {
            $element.css({
               'font-size':$fontSize + 'px',
               'line-height':$lineHeight + 'px'
            });
         }

      // Run CSS "changes"
         changes();

      });
      
   };
}(jQuery));