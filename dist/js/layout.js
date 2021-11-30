$( ".tf_layout-aside-expander" ).on( "click", function() {
    if( !$( "tf_layout" ).hasClass( "desktop" ) )
        $( ".tf_layout-aside " ).addClass( "tf_expand" );
});
$( ".tf_aside-fader" ).on( "click", function() {
    $( ".tf_layout-aside" ).removeClass( "tf_expand" );
});


$('.tf_layout-aside[class*=tf_fixed]').on('click','.tf_aside-logo', function(){
    if($('.tf_layout-aside').hasClass('tf_fixed'))
        $('.tf_layout-aside').removeClass('tf_fixed').addClass('tf_fixed-open');
    else 
        if($('.tf_layout-aside').hasClass('tf_fixed-open'))
            $('.tf_layout-aside').addClass('tf_fixed').removeClass('tf_fixed-open');
});