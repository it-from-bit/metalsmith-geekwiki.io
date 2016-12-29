
var profiles = {
  window800: {
    height:800,
    width:800,
    status:1
  },

  window200: {
    height:200,
    width:200,
    status:1,
    resizable:0
  },

  windowCenter: {
    height:300,
    width:400,
    center:1
  },

  windowNotNew: {
    height:300,
    width:400,
    center:1,
    createnew:0
  },

  windowCallUnload: {
    height:300,
    width:400,
    center:1,
    onUnload:unloadcallback
  },

};

function unloadcallback(){
  console.debug("unloaded");
}

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