require( 'expose-loader?$!jquery' )
require( './jquery.tester' )
require( './jquery.observer' )

var _         = require( 'lodash' )
var xregexp   = require( 'xregexp' )
var profiles  = require( './profiles' )
var utils     = require( './utils' )

var App = {
  Utils: {
    validateUrl: function( url ){
      return !!/^((http|https):)?\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test( url )
    },


    createTinyUrl: function( url ){
      if ( ! url || ! App.Utils.validateUrl( url ) ){
        throw new Error( 'URL Validation failed' )
      }

      console.log('URL: %s', url)
      // http://tinyurl.com/api-create.php?url=http://scripting.com/ 
      
      // If the URL provided uses a relative protocol, then add the current protocol
      if ( url.match( /^\/\// ) ) {
        url = window.location.protocol + url
      }
     
      $.ajax({
        method: 'GET',
        crossDomain: true,
        url: window.location.protocol + '//tinyurl.com/api-create.php',
        data: { 
          url: url
        }
      })
        .done(function( msg ) {
          console.log( "URL: " + msg );
        })
    }
  }
}

var Article = {

  ajaxSearch: function (){
    function formatRepo (repo) {
      if (repo.loading) return repo.text;

      var markup = "<div class='select2-result-repository clearfix'>" +
        "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
        "<div class='select2-result-repository__meta'>" +
          "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

      if (repo.description) {
        markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
      }

      markup += "<div class='select2-result-repository__statistics'>" +
        "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
        "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
        "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
      "</div>" +
      "</div></div>";

      return markup;
    }

    function formatRepoSelection (repo) {
      return repo.full_name || repo.text;
    }
  }
}

window.Article = Article
window.App = App

$('#process').click(function(e){
  console.clear()
  e.preventDefault;
  var url = $('#url').val()
  console.log('app.Utils.validateUrl(%s):', url, app.Utils.validateUrl( url ) )
  
  var result = app.Utils.createTinyUrl( url )
  if ( ! result ){
    $('#result').text('Error')
  } else {
    $('#result').text( result )
  }
})