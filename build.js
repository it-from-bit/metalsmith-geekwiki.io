const timer = {
  start: new Date()
} 
console.log( 'Starting at: %s', timer.start )

const fs          = require( 'fs' )
const path        = require( 'path' )
const postcss     = require( 'postcss' )
const pdf         = require( 'html-pdf' )
//const markdownit  = require( 'metalsmith-markdownit2' )
const markdownit  = require( '/Users/jhyland/Documents/Projects/metalsmith-markdownit2/' )
const metadata    = require( 'metalsmith-metadata' )
const Metalsmith  = require( 'metalsmith' )
const layouts     = require( 'metalsmith-layouts' )
const assets      = require( 'metalsmith-assets' )
const include     = require( 'metalsmith-include' )
const inplace     = require( 'metalsmith-in-place' )
const pug         = require( 'metalsmith-pug' )
const collections = require( 'metalsmith-collections' )
const tidy        = require( 'metalsmith-html-tidy' )
const msIf        = require( 'metalsmith-if' )
//const tojson      = require( 'metalsmith-to-json' )
const static      = require( 'metalsmith-static' )
const redirect    = require( 'metalsmith-redirect' )
const markdown    = require( 'metalsmith-markdown' )
const buildDate   = require( 'metalsmith-build-date' ) 
//const yamlToJson  = require( './metalsmith-yaml-to-json' )
const metallic    = require( 'metalsmith-metallic' )

const _internal = {}

_internal.ms2human = function(ms){
  sec = Math.round( (ms/1000 )%60 )
  min = Math.round( (ms/(1000*60))%60 )
  hrs = Math.round( (ms/(1000*60*60))%24 )
  
  var result = []

  if ( hrs > 0 ) result.push( 'Hours: ' + hrs )
  if ( min > 0 ) result.push( 'Minutes: ' + min )
  if ( sec > 0 ) result.push( 'Seconds: ' + sec )

  if ( ! result.length )
    return

  return result.join(', ')
}


const config = {
  enableModules: {
    tidyHtml: true
  },
  source: 'source',
  buildPath: 'public',
  usePretty: true,
  resumePdf: {
    source: 'resume-pdf.html',
    dest: 'Justin-Hyland-Resume.pdf'
  },
  redirects: {
    '/github': 'https://github.com/jhyland87'
  }
}
/* Metalsmith
 ******************************************************************************/

const siteBuild = Metalsmith(__dirname)
  .source( config.source )
  .destination( config.buildPath )
  .clean(true)
  .use(metadata({
    'site': 'data/site.yaml',
    'social_networks': 'data/social_networks.yaml',
    'technical': 'data/technical.yaml'
  }))
  .use( assets({
    source: './assets', 
    destination: './assets' 
  }))
  .use(collections({
    articles: {
      pattern: '*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(msIf(
    true,
    inplace({
      engine: 'pug',
      pretty: config.usePretty,
      pattern: '*.md'
    })
  ))
  .use(include())
  //.ignore(path.resolve( __dirname, 'source/data' ))
  .use(markdown())
  .use(markdownit({
    options: {
      html: true,
      xhtmlOut: true,
      typographer: true,
      linkify: true
    },
    render: 'inline'
  }))
  .use(layouts({
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
  .use(metallic())
  .use(msIf(
    false,
    tidy({
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
  .build(function (err) {
    if (err) {
      console.log('Error:',err)
    } 
    else {
      console.log('Metalsmith complete!\n')

       //stylesheets()
       print()
    }

    timer.end = new Date()
    timer.duration = timer.end - timer.start

    console.log( 'Stopped at: %s', timer.end )
    console.log( 'Elapsed: %s ms', timer.duration )
    console.log( 'Duration: %s', _internal.ms2human( timer.duration ) )
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


