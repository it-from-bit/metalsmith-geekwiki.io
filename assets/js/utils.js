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

    window.makeUsername = function( first, last ){
        return ( first.substr( 0, 1 ) + last ).toLowerCase()
    }

    var utils = {
      entry: './src/app.js',
      output: {
        path: './bin',
        filename: 'app.bundle.js',
      },
      module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
      }
    }

    return utils
}))

// @todo Need to check if date1 and date2 are numeric values or dates
Date.daysBetween = function( date1, date2 ) {

  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);
  
  return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
}

/*
Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}

//Set the two dates
var y2k  = new Date(2000, 0, 1); 
var Jan1st2010 = new Date(y2k.getFullYear() + 10, y2k.getMonth(), y2k.getDate());
var today= new Date();
//displays 726
console.log( 'Days since ' 
           + Jan1st2010.toLocaleDateString() + ': ' 
           + Date.daysBetween(Jan1st2010, today));
*/
/*
module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
  },
  publish: function () {
    var args = ( 1 <= arguments.length ) 
        ? Array.prototype.slice.call( arguments, 0 ) 
        : []
      
    console.group('publish ' + args[0])

    $.observer.publish.apply($.observer, args)

    console.groupEnd()
  }
}
*/