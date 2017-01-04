const fs          = require( 'fs' )
const path        = require( 'path' )
const _           = require( 'lodash' )
const debug       = require( 'debug' )( 'build.js' )
const postcss     = require( 'postcss' )
const pdf         = require( 'html-pdf' )
const Metalsmith  = require( 'metalsmith' )
const xml2json    = require( 'xml2json' )
const gracefulFs  = require( 'graceful-fs' )
const mapSiteJson = require( '../metalsmith-mapsite-json' )

gracefulFs.gracefulify(fs)

//const metadata    = require( '../metalsmith-metadata' )

//const dataUtil = require( './metalsmith-data-util' )
// Metalsmith plugin names to load (names of npm packages without /^metalsmith-/)
const msPlugins = [
  'markdownit',
  //'metadata',
  'layouts',
  'assets',
  'include',
  'in-place',
  'collections',
  'pug',
  'html-tidy',
  'if',
  'static',
  'redirect',
  'markdown',
  'build-date',
  'metallic',
  'dynamic',
  //'alias',
  'paths',
  'metadata-directory',
  'writemetadata',
  'filenames',
  'feed-atom',
  'drafts',
  'each',
  'permalinks',
  'default-values'
  //'mapsite',

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

  let nameSimplified = name.toLowerCase().replace(/^metalsmith\-/, '')

  if ( name !== nameSimplified ){
    debug( 'Renamed plugin "%s" to "%s"', name, nameSimplified)
    name = nameSimplified
  }

  if ( ! plugin || typeof plugin !== 'function' ){
    debug( 'Failed to load Metalsmith plugin "%s" as "%s" (require returned typeof: %s)', name, key, typeof plugin )
    return
  }

  ms[ key ] = plugin

  debug( 'Loaded Metalsmith plugin "%s" as "%s"', name, key )
})

debug( `Loaded ${Object.keys(ms).length} of ${msPlugins.length} plugins specified` )

const _internal = {}

/**
 * Read a specified XML file, return its contents in JSON format
 *
 * @note This will be easily replaced by https://github.com/geekwiki/metalsmith-data-util 
 */
function xmlFile2json( filePath ){
  const _d      = require( 'debug' )( 'xmlFile2json' )
  const parser  = require( 'xml2json' )
  const fs      = require( 'fs' )

  _d( 'xmlFile2json called with filename: %s', filePath )

  return function( files, metalsmith, done ){

     fs.readFile( filePath, 'utf8', function ( err, data ) {
      if ( err ){
        _d( 'ERROR: %s', err )
        return done( err )
      }
      
      var json = parser.toJson( data )
      _d( 'RESULT: %s', json )

      return done( null, json )
    })
  }
}

function yaml2json( folder ){
  const _d      = require( 'debug' )( 'xmlFile2json' )
  const parser  = require( 'xml2json' )
  const fs      = require( 'fs' )

  _d( 'xmlFile2json called with filename: %s', filePath )

  return function( files, metalsmith, done ){

     fs.readFile( filePath, 'utf8', function ( err, data ) {
      if ( err ){
        _d( 'ERROR: %s', err )
        return done( err )
      }
      
      var json = parser.toJson( data )
      _d( 'RESULT: %s', json )

      return done( null, json )
    })
  }
}

Metalsmith.prototype.msUse = function( name, opts ){
  if ( ! name || typeof name !== 'string' ){
    throw new Error( 'Invalid plugin name' ) 
  }

  let toExec

  if ( Object.keys( ms ).indexOf( name ) === -1 ){
    console.log('>>>> CHECKPOINT B:', name)
    debug( 'The plugin name "%s" was not found in the msPlugins array - skipping', name )

    return this.use( (function plugin(opts) {
      return function (files, metalsmith, done) {
        done()
      }
    })())
  }

  debug( 'Successfully found plugin "%s" in the msPlugins array - loading', name )

  return this.use( ms[ name ]( opts ) )
}

const config = require( './config' )

/* Metalsmith
 ******************************************************************************/

const siteBuild = Metalsmith(__dirname)
  .source( config.source )
  .destination( config.buildPath )
  .clean(true)
  /*
  .msUse('mapsite',{
    "hostname": "http://geekwiki.local/"
  })
  */
  .msUse('drafts')
  .msUse('filenames')
  .use(ms.paths({
    property: 'paths'
  }))
  /*
  .msUse( 'each',function (file, filename, done) {
    console.log('File: %s', filename)
    done();
  })
  */
  .msUse( 'defaultValues', [
  // Default Article Settings
    {
      pattern : 'articles/*.md',
      defaults: {
        layout: 'articles/article-page.pug',
        categories: 'general',
        foo: 'bar',
        draft: false
      }
    }
  ])
  .msUse( 'metadataDirectory',{
    directory: 'metadata/*.json'
  })
  //.use(dataUtil({ src: 'configs/*.yaml' }))
  /*.use(metadata({
    'site': config.sourceData + '/site.yaml',
    'social_networks': config.sourceData + '/social_networks.yaml',
    'technical':  config.sourceData + '/technical.yaml'
  }))
  */
  .use( ms.assets({
    source: './assets', 
    destination: './assets' 
  }))
  .msUse('collections',{
    articles: 'articles/*.md'
    /*articles2: {
      pattern: 'articles/*.md'
    }*/
  })
  .msUse( 'feedAtom',{
    collection: 'articles'
  })
  .msUse('permalinks',{
      // original options would act as the keys of a `default` linkset, 
      pattern: ':title',
      date: 'YYYY',
      relative: false,
      // each linkset defines a match, and any other desired option
      linksets: [{
          match: { 
            collection: 'articles' 
          },
          pattern: 'article/:title',
          date: 'mmddyy'
      },{
          match: { 
            collection: 'articles' 
          },
          pattern: 'article/:date/:title',
          date: 'mmddyy'
      }]
  })
  .use(ms.if(
    ( typeof config.redirects === 'object' && ! Array.isArray( config.redirects ) ),
    ms.redirect( config.redirects )
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
  .msUse('static', {
    "src": "source/data",
    "dest": "data"
  })
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
  .msUse( 'writemetadata', {
    collections: {
      articles: {
        output: {
          path: 'articles/metadata.json',
          asObject: true,
          metadata: {
            "type": "list"
          }
        },
       ignorekeys: ['next', 'previous','contents']
      }
    }
  })
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
  /*
  .use( mapSiteJson({
    'hostname': 'http://geekwiki.local/',
    'pattern': 'articles/*.html',
    'output': 'metadata/articles.json'
  }))
  */
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


