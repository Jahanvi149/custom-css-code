'use strict';

var $ = jQuery;



// (function ($){
//     'use strict';
//     jQuery(document).ready(function() {
//         jQuery("header .hamburger-menu").click(function(){
//             jQuery("header .menu-container").slideToggle(),
//             jQuery("header .hamburger-menu").toggleClass("mobile-menu-active")
//         }),
//         jQuery("header .hamburger-menu").on("click", function() {
//             jQuery(this).hasClass("active") ? jQuery(this).removeClass("active") : jQuery(this).addClass("active")
//         })

    
//     });
// })(jQuery);


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



// (function ($){
// $(document).ready(function() {
  
//   $(".hamburger-menu").click(function() {
//     $("body").toggleClass("active");
//   })
  
  
// });
// })(jQuery);