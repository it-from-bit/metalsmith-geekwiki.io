


$(function(){
  $( '.popupwindow' ).popupwindow( profiles )
})

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

    $.ajax({
      method: 'get',
      url: '/articles/index.json',
      dataType: 'json',
      success: function( data, textStatus, jqXHR ){

        var selectData = {
          articles: [{
            id: -1,
            value: null
          }],
          tags: {},
          categories: {}
        }
      

        console.debug('data.result',data.result)

        $.each( data.result, function( idx, _article ){
          console.debug('IDX %s (%s):', idx, typeof _article, _article )

          if ( typeof _article !== 'object' || ! $.isPlainObject( _article ) )
            return

          selectData.articles.push( {
            id: idx,
            text: _article.title
          })

          console.log('_article.tags:',_article.tags)
          console.log('_article.categories:',_article.categories)
          // Add the tags
          if ( typeof _article.tags && Array.isArray( _article.tags ) ){
            $.each( _article.tags, function( idx, tag ){
              //if ( typeof selectData.tags[ tag ] === 'undefined' )
                selectData.tags[ tag ] = {
                  id: tag,
                  text: tag
                }
              
            })
          }

          // Add the categories
          if ( typeof _article.categories && Array.isArray( _article.categories ) ){
            $.each( _article.categories, function( idx, category ){
              //if ( typeof selectData.categories[ category ] === 'undefined' )
                selectData.categories[ category ] = {
                  id: category,
                  text: category
                }
              
            })
          }

        })



        console.log( 'selectData:', selectData )

        $('.article-search[data-filter="title"]').select2({
          data: selectData.articles,
           placeholder: {
            id: '-1', // the value of the option
            text: 'Search Article Titles'
          },
          allowClear: true,
          minimumInputLength: 1,
          closeOnSelect: true
        })

        var articleTitleMatcher = function( input, option ) {
            // option.disabled option.element option.id option.selected option.text
            console.debug( 'input:',input )
            console.debug( 'option:',option )

            console.debug('"%s".indexOf("%s")', option.text.toUpperCase(), input.term.toUpperCase(), option.text.toUpperCase().indexOf(input.term.toUpperCase()))
      
            if ( input._type === 'query' ){
              
              if ( option.text.toUpperCase().indexOf( input.term.toUpperCase() ) !== -1 ) 
                return true

            }
          

            return false
          }

        $.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
          $('.article-search[data-filter="title"]').select2({
            matcher: oldMatcher( articleTitleMatcher )
          })
        })

        console.log('TAGS data:', Object.values( selectData.tags ))
        console.log('CATEGORIES data:', Object.values( selectData.categories ))

        $('.article-search[data-filter="tags"]').select2({
          data: Object.values( selectData.tags ),
           placeholder: {
            id: '-1', // the value of the option
            text: 'Search Article Tags'
          },
          allowClear: true,
          //maximumInputLength: 10,
          minimumInputLength: 1,
          closeOnSelect: true,
          tokenSeparators: [',']
        })

        $('.article-search[data-filter="categories"]').select2({
          data: Object.values( selectData.categories ),
           placeholder: {
            id: '-1', // the value of the option
            text: 'Search Article Categories'
          },
          allowClear: true,
          //maximumInputLength: 10,
          minimumInputLength: 1,
          closeOnSelect: true,
          tokenSeparators: [',']
        })



        $(".js-example-tokenizer").select2({
          tags: true,
          tokenSeparators: [',', ' ']
        })


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