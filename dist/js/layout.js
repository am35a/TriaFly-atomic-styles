$( ".tf_layout-aside-expander" ).on( "click", function() {
    if( !$( "tf_layout" ).hasClass( "desktop" ) )
        $( ".tf_layout-aside " ).addClass( "tf_expand" );
});
$( ".tf_aside-fader" ).on( "click", function() {
    $( ".tf_layout-aside" ).removeClass( "tf_expand" );
});
