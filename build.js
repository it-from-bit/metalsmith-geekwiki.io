const fs            = require( 'fs' )
const path          = require( 'path' )
//const _           = require( 'lodash' )
const _             = require( 'flat-line' )
const debug         = require( 'debug' )( 'build.js' )
const postcss       = require( 'postcss' )
const pdf           = require( 'html-pdf' )
const Metalsmith    = require( 'metalsmith' )
const xml2json      = require( 'xml2json' )
const gracefulFs    = require( 'graceful-fs' )
const mapSiteJson   = require( '../metalsmith-mapsite-json' )
const GitHubApi     = require( 'github' )
const JSONc         = require( 'circular-json' )
const msGithub      = require( '../metalsmith-github' )

const github = {
  api: new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    //pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    headers: {
      "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
  })
}

github.repo = github.api.getReposApi('geekwiki', 'metalsmith-geekwiki.io')


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
  'default-values',
  'fingerprint'
  //'mapsite',

  /* Disabled plugins
  ,'yaml-to-json',
  'to-json'
  */
]

if ( typeof process.env.GIT_CLIENT_ID === 'string' ){
  debug('Found Github client ID: %s', process.env.GIT_CLIENT_ID)
}

if ( typeof process.env.GIT_CLIENT_SECRET === 'string' ){
  debug('Found Github client SECRET: %s', process.env.GIT_CLIENT_SECRET)
}

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

config.getCommitHistory = [
  new RegExp( '^articles\/.*\.md$' )
  //'articles/centos-7-icebreaker-everything-you-need-to-know-to-get-started.md'
]

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
  .msUse( 'each',function ( file, filename, done ) {
    file.stats.md5sum = _.md5( file.contents.toString() )

    debug( 'Set stats.md5sum for file %s to %s', filename, file.stats.md5sum )

    done()

    //https://api.github.com/repos/geekwiki/metalsmith-geekwiki.io/commits?path=source/articles/centos-7-icebreaker-everything-you-need-to-know-to-get-started.md

  })/*
  .use(msGithub({
    githubapi: {
      debug: false,
      protocol: "https",
      // should be api.github.com for GitHub
      host: "api.github.com", 
      // for some GHEs (none for GitHub)
      pathPrefix: "", 
      // Any additional Headers
      headers: {
        // GitHub requires a User-Agent header (which defaults to Metalsmith-Github-Api)
        "User-Agent": "Metalsmith-Github-Api" 
      },
      // Library to use for promises
      Promise: require('bluebird'),
      // There's currently an issue with non-get redirects, so allow ability to disable follow-redirects
      followRedirects: false, 
      // HTTPS request timeout (milliseconds)
      timeout: 5000,
      // 
      username: 'geekwiki',
      repository: 'metalsmith-geekwiki.io'

    },
    otherdata:{
      repo          : 'metalsmith-geekwiki.io',
      owner         : 'geekwiki',
      branch        : 'master',
      path          : srcFile,
      client_id     : process.env.GIT_CLIENT_ID,
      client_secret : process.env.GIT_CLIENT_SECRET
    },
    processing: {
      async: true,
      batch: 5,
      patient: true
    },
    // Files selector using multimatch
    files: ['articles/*.md'],
    // The Author Element can be 'author' or 'committer'
    authorElement: 'author',

    
    //files: ['articles/*.md']
  }))*/
  /*.msUse( 'transform', function(data, m){
    let md5 = _.md5(data.contents.toString())
    data.md5sum = md5

    return data;
  })
  */
  .msUse('fingerprint',{ pattern: 'articles/*' })
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
          path: 'articles/index.json',
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


