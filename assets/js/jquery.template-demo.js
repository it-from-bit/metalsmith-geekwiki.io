$(document).ready(function(){
  function toggleIcon( size, visible ){
    var iconSize = 'lg'
    // If its not boolean, or zero, use lg
    if ( ! size || parseInt( size ) != size || parseInt( size ) == 1 ){
      iconSize = 'lg'
    }
    // Otherwise, 
    else if ( parseInt( size ) < 6 ) {
      iconSize = parseInt( size ) + 'x'
    }

    var $table = $('#font-awesome-demo')
    var totalIcons = $table.find('td.icon-cell').length

    if ( visible ){
      if ( totalIcons > $table.find( 'i.fa-' + iconSize ).length ){
        $('.icon-cell').each(function(k,e){
          var $c = $( this )
          var icon = $c.data( 'icon' )

          $c.find('span').append( 
            $('<i/>', {
              class: 'fa fa-'+ iconSize +' fa-' + icon
            })
          )
        })
      }
    }
    else {
      if ( $table.find( 'span > i.fa-' + iconSize ).length ){
        $table.find( 'span > i.fa-' + iconSize ).remove()
      }
    }
  }


  $('.icon-size').change(function() {
    var $check = $(this)
    toggleIcon( parseInt( $check.data('size') ), $check.is(':checked') )
  })
})

// When the page fully loads, Click the large icon checkbox
$( window ).load(function() {
  $('input.icon-size[data-size="lg"]').trigger('click')
})