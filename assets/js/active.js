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
    /*---------------------- 
          countdown js
    ----------------------*/
    if($('.offer-time-countdown').length){  
      $('.offer-time-countdown').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner day_bg"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner hours_bg"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner miniute_bg"><span class="count">%M</span>miniutes</div></div>  ' + '<div class="counter-column"><div class="inner second_bg"><span class="count">%S</span>seconds</div></div>'));
      });
     });
    }
    /*---------------------- 
            countdown js
    ----------------------*/
})(window.jQuery);   