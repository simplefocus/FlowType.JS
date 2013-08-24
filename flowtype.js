/*
* FlowType.JS with/without jQuery/Zepto.
* Adapted by Christian Dannie Storgaard (Cybolic). Based on:
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

(function(global) {

    var addEvent = null,
        getWidth = null,
        setFontSize = null,
        setLineHeight = null,
        flowtype = null
    ;
    if ( global.$ && global.$.css ) {
        addEvent = function(element, eventName, callback) { $( element ).bind( eventName, callback ); };
        getWidth = function(element) { return $(element).width(); };
        setFontSize = function(element, size) { $(element).css('font-size', size); };
        setLineHeight = function(element, height) { $(element).css('line-height', height); };
    } else {
        addEvent = function(element, eventName, callback) {
            if ( element.addEventListener ) {
                element.addEventListener( eventName, callback, false );
            } else if ( element.attachEvent ) {
                element.attachEvent( 'on'+eventName, callback );
            } else {
                element['on'+eventName] = callback;
            }
        };
        getWidth = function(element) { return element.clientWidth; };
        setFontSize = function(element, size) { element.style.fontSize = size; };
        setLineHeight = function(element, height) { element.style.lineHeight = height; };
    }


    flowtype = function(element, options) {

        // Establish default settings/variables
        // ====================================
        options.maximum   = options.maximum   || 9999;
        options.minimum   = options.minimum   || 1;
        options.maxFont   = options.maxFont   || 9999;
        options.minFont   = options.minFont   || 1;
        options.fontRatio = options.fontRatio || 35;
        options.lineRatio = options.lineRatio || 1.45;

        // Do the magic math
        // =================
        changes = function(el) {
            var elw = getWidth(el),
                width = elw > options.maximum ? options.maximum : elw < options.minimum ? options.minimum : elw,
                fontBase = width / options.fontRatio,
                fontSize = fontBase > options.maxFont ? options.maxFont : fontBase < options.minFont ? options.minFont : fontBase
            ;

            setFontSize(el, fontSize + 'px');
            setLineHeight(el, fontSize * options.lineRatio + 'px');
        };

        // Make the magic visible
        // ======================
        if ( global.$ && global.$.fn ) {
            return this.each(function() {
                // Context for resize callback
                var that = this;

                // Attach the update method the DOM element
                element[0].updateFlowType = function(){changes(that);};

                // Make changes upon resize
                $(window).resize(function(){changes(that);});

                // Set changes on load
                changes(this);
            });
        } else {
            // Attach the update method the DOM element
            element.updateFlowType = function(){changes(element);};

            // Make changes upon resize
            addEvent( global, 'resize', element.updateFlowType );

            // Set changes on load
            element.updateFlowType();
        }
    };

    // Add jQuery/Zepto plugin if either is available
    if ( global.$ && global.$.fn ) {
        $.fn.flowtype = function(settings) {
            flowtype.call(this, this, settings);
        }
    } else {
        global.flowtype = flowtype;
    }


}(window));

// Demo setup
// ==========

// jQuery/Zepto setup
if ( window.$ && window.$.fn.flowtype ) {
    $('#demo-article').flowtype( {fontRatio:36} );
    $('#demo-control').change(function(event) {
    $('#demo-article').css('width', event.target.value+'%');
    $('#demo-article')[0].updateFlowType();
});
// Native setup
} else {
    window.flowtype( document.getElementById('demo-article'), {fontRatio:36} );
    document.getElementById('demo-control').addEventListener('change', function(event) {
        document.getElementById('demo-article').style.width = event.target.value+'%';
        document.getElementById('demo-article').updateFlowType();
    }, false);
}

