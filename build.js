const fs          = require( 'fs' )
const path        = require( 'path' )
const _           = require( 'lodash' )
const debug       = require( 'debug' )( 'build.js' )
const postcss     = require( 'postcss' )
const pdf         = require( 'html-pdf' )
const Metalsmith  = require( 'metalsmith' )

// Metalsmith plugin names to load (names of npm packages without /^metalsmith-/)
const msPlugins = [
  'markdownit',
  'metadata',
  'layouts',
  'assets',
  'include',
  'in-place',
  'pug',
  'collections',
  'html-tidy',
  'if',
  'static',
  'redirect',
  'markdown',
  'build-date',
  'metallic',
  'dynamic',
  'alias',
  'paths',

  /**
   * Not sure I'm satisfied with using this to keep track of execution duration, since 
   * it literally does absolutely nothing other than pass the string parameter provided
   * to the debug() function. But leaving it for now.
   * @see: https://github.com/deltamualpha/metalsmith-timer/blob/master/lib/index.js
   * @note: I think the entire plugin can be rewritten as ES6 in 4 lines:
   *    module.exports = string => ( files, metalsmith, done ) => { 
   *      require( 'debug' )( 'metalsmith-timer' )( string )
   *      done() 
   *    }
   */
  'timer'

  /* Disabled plugins
  ,'yaml-to-json',
  'to-json'
  */
]

// Object to store any loaded Metalsmith plugins
const ms = {}

// Iterate over the list of Metalsmith plugins, requiring each one and adding it 
// to the ms object (with a camelCase format of the names as keys)
_.forEach( msPlugins, value => {
  let key     = _.camelCase( value )
  let name    = `metalsmith-${value}`
  let plugin  = require( name )

  if ( ! plugin || typeof plugin !== 'function' ){
    debug( 'Failed to load Metalsmith plugin "%s" as "%s" (require returned typeof: %s)', name, key, typeof plugin )
    return
  }

  ms[ key ] = plugin

  debug( 'Loaded Metalsmith plugin "%s" as "%s"', name, key )
})

debug( `Loaded ${Object.keys(ms).length} of ${msPlugins.length} plugins specified` )

const _internal = {}


//const es6Plugin = options => {
function es6Plugin({ rowFilesLimit, verbose }){
  let row = { limit: rowFilesLimit, rowFiles: [], count: 0 }

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
}

const pluginVersion = false

const es6Plugin2 = options => {
  let row = { limit: 10, rowFiles: [], count: 0 }

  return ( files, metalsmith, done ) => {
    var fKeys = Object.keys( files )
    
    for ( var k = 0; k < fKeys.length; k++ ) {
      row.rowFiles.push( fKeys[ k ] )
        
      if ( row.limit === row.rowFiles.length+1 || k+1 === fKeys.length ){
        row.count = row.count+1
        console.log( '>>>>> ROW %s: %s', row.count, row.rowFiles.join( ', ') )
        row.rowFiles = []
      }
    }
    done()
  }
}


var es5Plugin = function( options ){
  var row = { limit: 10, rowFiles: [], count: 0 }
  
  console.log('Plugin Options:',options)
  return function ( files, metalsmith, done ){
    var fKeys = Object.keys( files )
    console.log('File count:', fKeys.length )
    console.log( "FILE COUNT: %s", fKeys.length || 'None' )
    /*
    for ( let [ key, value ] of files ) {
      console.log('Key "%s":', key,'count')
    }*/


    for ( var k = 0; k < fKeys.length; k++ ) {
      row.rowFiles.push( files[ fKeys ] )
        
      if ( row.limit === row.rowFiles.length+1 || k+1 === fKeys.length ){
        row.count = row.count+1
        console.log( '>>>>> ROW %s: %s', row.count, row.rowFiles.join( ', ') )
        row.rowFiles = []
      }
    }
    done()
  }
}

const config = require( './config' )

/* Metalsmith
 ******************************************************************************/

const siteBuild = Metalsmith(__dirname)
  .use( ms.timer( 'pre-source' ) )
  .source( config.source )
  .use( ms.timer( 'post-source' ) )
  .destination( config.buildPath )
  .clean(true)
  .use(ms.paths({
    property: 'paths'
  }))
  .use(ms.metadata({
    'site': config.sourceData + '/site.yaml',
    'social_networks': config.sourceData + '/social_networks.yaml',
    'technical':  config.sourceData + '/technical.yaml'
  }))
  .use(ms.if(
    ( pluginVersion && pluginVersion == 6 ),
    es6Plugin({ 
      //limit: 10, rowFiles: [], count: 0 
      rowFileLimit: 10, verbose: 4
    })
  ))
  .use(ms.if(
    ( pluginVersion && pluginVersion == 5 ),
    es5Plugin({ 
      //limit: 10, rowFiles: [], count: 0 
      rowFileLimit: 10, verbose: 4
    })
  ))
  .use( ms.timer( 'pre-assets' ) )
  .use( ms.assets({
    source: './assets', 
    destination: './assets' 
  }))
  .use( ms.timer( 'post-assets' ) )
  .use(ms.if(
    ( typeof config.redirects === 'object' && ! Array.isArray( config.redirects ) ),
    ms.redirect( config.redirects )
  ))
  .use(ms.if(
    false,
    ms.alias({
      '/nslookup': '/posts/a-better-nslookup.html'
      //'/foo.html': '/demos/foo.html',
      //'/f.html': '/demos/foo.html'
    })
  ))
  /*
  .use( ms.collections({
    articles: {
      pattern: '*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  */
  .use(ms.if(
    true,
    ms.inPlace({
      engine: 'pug',
      pretty: config.usePretty,
      pattern: '*.md'
    })
  ))
  .use(ms.include())
  .ignore( path.resolve( __dirname, 'public/.git' ) )
  //.ignore( path.resolve( __dirname, 'public/CNAME' ) )
  .use(ms.markdown())
  .use(ms.markdownit({
    html: true,
    xhtmlOut: true,
    typographer: true,
    linkify: true
  }))
  .use(ms.layouts({
    engine: 'pug',
    pretty: config.usePretty,
    directory: 'templates/',
    pattern: [
      '**', 
      '!json-data/*',
      // Skip over the partials that were already processed
      '!partials/*',  '!partials/*/*'
    ]
  }))
  .use(ms.metallic())
  .use(ms.if(
    false,
    ms.htmlTidy({
      pattern: '**/*html',
      tidyOptions: {
        // See http://api.html-tidy.org/tidy/tidylib_api_5.1.25/quick_ref.html
        'indent-spaces': 2,
        //'indent-with-tabs': false,
        'fix-bad-comments': true,
        'drop-empty-paras': false,
        'drop-empty-elements': false,
        'merge-divs': false,
        'merge-emphasis': false,
        'hide-comments': false
      }
    })
  ))
  .use( ms.timer( 'pre-build' ) )
  .build( err => {
    if (err) {
      console.log('Error:',err)
    } 
    else {
      console.log('Metalsmith complete!\n')

       //stylesheets()
       print()
    }
  })

/* PostCSS
 ******************************************************************************/

function stylesheets () {
  var css = fs.readFileSync('css/main.css', 'utf-8')

  var plugins = [
    require( 'postcss-import'),
    require( 'postcss-nested'),
    require( 'postcss-custom-properties'),
    require( 'postcss-custom-media'),
    require( 'postcss-color-function'),
    require( 'postcss-focus'),
    require( 'autoprefixer')({
      browsers: ['last 2 versions', '> 5%']
    }),
    require( 'css-mqpacker'),
    require( 'cssnano')
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      require( 'postcss-uncss')({
        html: ['public/**/*.html']
      })
    )
  }

  postcss(plugins)
    .process(css, {
      from: 'css/main.css',
      to: 'public/css/main.css',
      map: { inline: false }
    })
    .then(function (result) {
      if (result.warnings()) {
        result.warnings().forEach(warn => {
          console.warn(warn.toString())
        })
      }
      fs.mkdirSync('public/css')
      fs.writeFileSync('public/css/main.css', result.css, 'utf-8')
      if (result.map) fs.writeFileSync('public/css/main.css.map', result.map, 'utf-8')
      console.log('PostCSS Complete!\n')
    })
}

/* PDF
 ******************************************************************************/

function print () {
  return
  var html = fs.readFileSync( config.buildPath + '/' + config.resumePdf.source, 'utf8' )

  var options = {
    height: '11in',
    width: '8.5in',
    type: 'pdf',
    base: 'http://localhost:8008'
  }

  var server = require( 'browser-sync' ).create()

  /*
  server.init({
    server: 'public',
    port: 8008,
    open: false,
    ui: false
  })
  */

  pdf.create(html, options).toFile( config.resumePdf.dest, function (err, res) {
    if (err) return console.log(err)
    console.log('\nPDF generation complete!\n')
    console.log('PDF generated from HTML page %s to document %s', config.resumePdf.source, config.resumePdf.dest)
    //process.exit()
  })
}


