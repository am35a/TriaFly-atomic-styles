// $( ".tf_layout-aside-expander" ).on( "click", function() {
//     if( !$( "tf_layout" ).hasClass( "desktop" ) )
//         $( ".tf_layout-aside " ).addClass( "tf_expand" );
// });
// $( ".tf_aside-fader" ).on( "click", function() {
//     $( ".tf_layout-aside" ).removeClass( "tf_expand" );
// });

$( "#finder-filters-toogle, #finder-filters-close" ).on( "click", function() {
    if( $( "#finder-filters-toogle" ).hasClass( "active" ) )
        $( ".tf_explorer-filters" ).addClass( "d-none" )
    else
        $( ".tf_explorer-filters" ).removeClass( "d-none" )
    $( "#finder-filters-toogle" ).toggleClass( "active" )
});


$( "#finder-as-folder" ).on( "click", function() {
    $( this ).prop( "disabled", true )
    $( "#finder-as-list" ).removeAttr( "disabled" )
    $( ".tf_finder-folders-toogle" ).removeClass( "d-none" )
});

$( "#finder-as-list" ).on( "click", function() {
    $( this ).prop( "disabled", true )
    $( "#finder-as-folder" ).removeAttr( "disabled" )
    $( ".tf_finder-folders-toogle" ).addClass( "d-none" )
});


// if( $( "#finder-as-folder" ).attr( "disabled" ) )
//     console.log(2)
//     $( ".tf_finder-filters-container" ).addClass( "d-none" )
// else
//     $( ".tf_finder-filters-container" ).removeClass( "d-none" )



// create event to clear button for input field
$('[data-action="clearable"]').each(function(){
    var $input = $(this).find('input'),
        $clear = $(this).find('[data-action="clear"]');
    $input.on('input focusin', function(){
        // $clear.toggle(!!this.value);
        $clear.prop('disabled', !this.value);
    });
    $clear.on('touchstart click', function(e) {
        e.preventDefault();
        $input.val('').trigger('input').focus();
    });
});
