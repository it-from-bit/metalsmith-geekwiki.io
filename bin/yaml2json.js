const yaml    = require('yamljs')
const glob    = require('glob')
const async   = require('async')
const path    = require('path')
const fs      = require('fs')
const debug   = require('debug')('yaml2json')

console.log(__dirname)


let src = '../config/*.yaml'
let dest = '../metadata'


src = path.normalize( __dirname + '/' + src )
dest = path.normalize( __dirname + '/' + dest )

//console.log('src:',src)
//process.exit()

debug('SRC:',src)
debug('DEST:',dest)

glob( src, function ( err, files ) {
  if ( err ) {
    console.log('ERROR:',err)
    return
  }

  debug('Glob returned %s files:', files.length, files.join(', '))

  // assuming openFiles is an array of file names
  async.each( files, function( file, callback ) {
    debug('Processing file: %s', file)
    var fileParsed = path.parse( file )

    // Perform operation on file here.
    debug( 'Processing file %s', file )

    let jsonFile = dest +'/'+ fileParsed.name+'.json'

    yaml.load( file , function( yamlData ){
      debug( 'Content length for file %s: %s', file, JSON.stringify(yamlData).length )

      fs.writeFile( jsonFile, JSON.stringify(yamlData), (err) => {
        if ( err ){
          debug('Error saving file "%s": %s', jsonFile, err)
          return callback(err)
        }

        debug( 'File "%s" converted to json and saved at "%s"', file, jsonFile )
        callback( null, true )
      })
    })

  }, function( err ) {
      // if any of the file processing produced an error, err would equal that error
      if( err ) {
        // One of the iterations produced an error.
        // All processing will now stop.
        console.log('A file failed to process');
      } else {
        console.log('All files have been processed successfully');
      }
  });
})