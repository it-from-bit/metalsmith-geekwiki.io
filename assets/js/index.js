//require( 'expose-loader?$!jquery' )
//require( './jquery.tester' )
//require( './jquery.observer' )

var $         = require('jquery')
var _         = require( 'lodash' )
//var xregexp   = require( 'xregexp' )
//var select2   = require( '../plugins/select2/js/select2.full' )
var profiles  = require( './profiles' )
var utils     = require( './utils' )


$.fn.select2 = require( '../plugins/select2/js/select2.full' )
//require( '../plugins/select2/js/select2.full' )
//require( '../plugins/select2/js/select2.full' )
//require('select2')


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

  initSearch: function (){
    console.log('Article.initSearch called')

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

    $.ajax({
      method: 'get',
      url: '/articles/index.json',
      dataType: 'json',
      success: function( data, textStatus, jqXHR ){
        var selectData = {
          articles: [],
          tags: {},
          categories: {}
        }

        $.each( data.result, function( idx, _article ){
          if ( typeof _article !== 'object' || ! $.isPlainObject( _article ) ){
            return
          }

          // Add Article Title option
          selectData.articles.push( {
            id   : idx,
            text : _article.title
          })

          // Add the tags
          if ( typeof _article.tags && Array.isArray( _article.tags ) ){
            $.each( _article.tags, function( idx, tag ){
              if ( typeof selectData.tags[ tag ] === 'undefined' ){
                return
              }

              selectData.tags[ tag ] = {
                id   : tag,
                text : tag
              }
            })
          }

          // Add the categories
          if ( typeof _article.categories && Array.isArray( _article.categories ) ){
            $.each( _article.categories, function( idx, category ){
              if ( typeof selectData.categories[ category ] === 'undefined' ){
                return
              }

              selectData.categories[ category ] = {
                id   : category,
                text : category
              }
            })
          }
        })
    
        console.debug('selectData:',selectData)

        //setTimeout(function(){

          $('.article-search[data-filter="title"]').select2({
            data: selectData.articles,
            placeholder: 'Search Article Titles',
            allowClear: true,
            closeOnSelect: true
          })


          var articleTitleMatcher = function( input, option ) {
            if ( input._type === 'query' ){
              if ( option.text.toUpperCase().indexOf( input.term.toUpperCase() ) !== -1 ) {
                return true
              }
            }

            return false
          }
          /*
          $.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
            $('.article-search[data-filter="title"]').select2({
              matcher: oldMatcher( articleTitleMatcher )
            })
          })
          */

          $('.article-search[data-filter="tags"]').select2({
            data: Object.values( selectData.tags ),
            placeholder: 'Search Article Tags',
            allowClear: true,
            //closeOnSelect: true,
            selectOnClose: true,
            tokenSeparators: [',']
          })

          $('.article-search[data-filter="categories"]').select2({
            data: Object.values( selectData.categories ),
            placeholder: 'Search Article Categories',
            allowClear: true,
            //closeOnSelect: true,
            selectOnClose: true,
            tokenSeparators: [',']
          })

        //}, 10)
        
        /*
        $(".js-data-example-ajax").select2({
          data: articles
          ajax: {
            method:'get',
            url: "https://api.github.com/search/repositories",
            dataType: 'json',
            delay: 250,
            processData: false,
            traditional: false,
            data: function ( params ) {
              var $params = $.param({ 
                q    : params.term + '+org:geekwiki',
                page : params.page
              })

              return decodeURIComponent( $params )
            },
            processResults: function (data, params) {
              // parse the results into the format expected by Select2
              // since we are using custom formatting functions we do not need to
              // alter the remote JSON data, except to indicate that infinite
              // scrolling can be used
              params.page = params.page || 1;

              return {
                results: data.items,
                pagination: {
                  more: (params.page * 30) < data.total_count
                }
              };
            },
            cache: true
          },
          escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
          minimumInputLength: 1,
          templateResult: formatRepo, // omitted for brevity, see the source of this page
          templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        })
        */
        
      }
    })

    
  }
}

window.Article = Article
window.App = App