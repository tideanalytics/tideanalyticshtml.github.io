// overwrite template script
/*---------------------------------
sticky header JS
-----------------------------------*/
$(window).on('scroll', function () {
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
(function () {
  'use strict';
  const year = new Date().getFullYear();
  document.getElementById('footer_year').innerHTML = year;
})();

// ga
(function () {
  'use strict';
  window.dataLayer = window.dataLayer || [];
  function gtag() {dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-47472966-1');
})();


// freshchat
(function () {
  'use strict';
  function initFreshChat() {
    window.fcWidget.init({
      token: '782ca078-53a3-430c-86e9-f06c6a1f1aa0',
      host: 'https://wchat.freshchat.com'
    });
  }

  (function (d, id) {
    var fcJS;
    if (d.getElementById(id)) {
      initFreshChat();
      return;
    }
    fcJS = d.createElement('script');
    fcJS.id = id;
    fcJS.async = true;
    fcJS.src = 'https://wchat.freshchat.com/js/widget.js';
    fcJS.onload = initFreshChat;
    d.head.appendChild(fcJS);
  }(document, 'freshchat-js-sdk'));
})();