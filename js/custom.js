'use strict';

var $ = jQuery;


(function ($){
    'use strict';
    jQuery(document).ready(function() {
        jQuery("header .hamburger-menu").click(function(){
            jQuery("header .nav-menu").slideToggle(),
            jQuery("body").toggleClass("active")
        }),
        jQuery("header .hamburger-menu").on("click", function() {
            jQuery(this).hasClass("active") ? jQuery(this).removeClass("active") : jQuery(this).addClass("active")
        })

    
    });
})(jQuery);

