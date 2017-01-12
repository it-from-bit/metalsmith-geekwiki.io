(function( factory ) {
  "use strict";

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( ['jquery'], function ( $ ) {
      return factory( $, window, document );
    } );
  }
  else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = function (root, $) {
      if ( ! root ) {
        // CommonJS environments without a window global must pass a
        // root. This will give an error otherwise
        root = window;
      }

      if ( ! $ ) {
        $ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
          require('jquery') :
          require('jquery')( root );
      }

      return factory( $, root, root.document );
    };
  }
  else {
    // Browser
    factory( $, window, document );
  }
}
(function( $, window, document, undefined ) {
  "use strict";

     /*
     * jQuery Observer pattern 
     * inspired by @addyosmani 's code
     * see: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#highlighter_506612
     */
    var topics = []

    function getTopic( id ) {
        var callbacks, topic
        topic = id && topics[ id ]

        if ( ! topic) {
            callbacks = $.Callbacks()

            topic = {
                publish     : callbacks.fire,
                subscribe   : callbacks.add,
                unsubscribe : callbacks.remove
            }

            if ( id ) topics[ id ] = topic
        }
        return topic
    }

    $.observer = {
        publish: function( id ) {
          var args = ( 2 <= arguments.length ) 
            ? Array.prototype.slice.call( arguments, 1 ) 
            : []

          var t = getTopic( id )
          
          return t.publish.apply( t, args )
        },
        subscribe: function( id, fn ) {
            return getTopic( id ).subscribe( fn )
        },
        unsubscribe: function( id, fn ) {
            return getTopic( id ).unsubscribe( fn )
        }
    }

    return $.observer
}))