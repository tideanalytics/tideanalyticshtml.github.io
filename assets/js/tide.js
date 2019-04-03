
// overwrite template script

/*---------------------------------
sticky header JS
-----------------------------------*/
$(window).on('scroll',function() {
  'use strict';
  let scroll = $(window).scrollTop();
  if (scroll < 100) {
    document.getElementById('tide-logo').src = 'internal-assets/img/logo-vertical-grey.png';
    $('#header_sticky').removeClass('sticky');
  } else {
    document.getElementById('tide-logo').src = 'internal-assets/img/logo-horizontal-grey.png';
    $('#header_sticky').addClass('sticky');
  }
});

// get latest year

(function() {
  'use strict';
  const year = new Date().getFullYear();
  document.getElementById('footer_year').innerHTML = year;
})();
