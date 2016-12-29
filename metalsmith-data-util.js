/* high-level interface */
//var yaml2json = require('yaml-to-json');
 
/* lower-level interface */
//var yaml = require('yaml-to-json').yaml;
// load multiple documents, always returns an array 
//yaml.safeLoadAll(str);

//console.log(yaml.safeLoadAll('src/data/*.yaml'))

// load one or more documents, returning  
// an array or an object depending on whether 
// a multidoc is detected 
//yaml.safeLoadAny(str);

// fussy parsing (prefers to parse documents  
// as strings rather than as YAML) 
//yaml.safeLoadMixed(str);

// detect if a string of YAML contains multiple documents 
//yaml.isMultidoc(str);

var YAML = require('yamljs');
var glob = require('glob')
var async = require('async')
var path  = require('path')
var fs  = require('fs')
var debug = require('debug')('metalsmith-data-util')


//console.log(path.parse(dir)); process.exit(1)


function plugin( opts ){
  if ( ! opts || typeof opts !== 'object' ){
    debug('typeof opts: %s', typeof opts)
    throw new Error('Invalid opts provided')
  }

  debug( 'Opts (JSON): %s', JSON.stringify( opts ) )

  var { src, dest, srcFormat, destFormat, destExt } = opts

  debug( 'Opt: src: %s', src )
  debug( 'Opt: dest: %s', dest )
  debug( 'Opt: srcFormat: %s', srcFormat )
  debug( 'Opt: destFormat: %s', destFormat )
  debug( 'Opt: destExt: %s', destExt )

  var srcParsed = path.parse( src )

  debug( 'Parsed src:', JSON.stringify( srcParsed ) )

  glob( srcParsed.dir, function ( err, files ) {
    if (err) {
      debug('ERROR:',err)
      return function(files, metalsmith, done){
        debug('AAAAA')
        done()
      }
    }

    debug('Glob returned %s files:', files.length, files.join(', '))

    return function(files, metalsmith, done){
      debug('BBBBB')
      done()
    }
  })
  /*
  if ( verbose ) 
    console.log( 'Plugin Opts: %s', ( arguments.length ? JSON.stringify( arguments[0] ) : 'None' ) )

  return ( files, metalsmith, done ) => {
    var fKeys = Object.keys( files )

    for ( var k = 0; k < fKeys.length; k++ ) {
      row.rowFiles.push( fKeys[ k ] )
        
      if ( row.limit === row.rowFiles.length+1 || k+1 === fKeys.length ){
        row.count = row.count+1

        if ( verbose ) console.log( 'Row #%s: %s', row.count, row.rowFiles.join( ', ') )

        row.rowFiles = []
      }
    }
    done()
  }
  */
}

module.exports = plugin;
