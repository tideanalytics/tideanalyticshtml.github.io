(function($) {
  'use strict';  
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.lds-ellipsis');
        var preloaderArea = jQuery('.preloader');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/
    /*---------------------- 
            wow js
    ----------------------*/
    new WOW().init();
    /*---------------------- 
            wow js
    ----------------------*/

})(window.jQuery);   