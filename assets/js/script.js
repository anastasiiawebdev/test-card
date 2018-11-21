(function($) {
 'use strict';

 window.project = $.extend({}, {

  init: function() {
   project.gallery();
   project.tooltipsMobile();

   $(window).on('resize', project.tooltipsMobile);

  },
  gallery: function() {
   $('.open-gallery-link').click(function() {
    $.magnificPopup.open({
     items: [
      {
       src: 'assets/img/del/card-image-1.jpg'
      },
      {
       src: 'assets/img/del/card-image-2.jpg'
      },
      {
       src: 'assets/img/del/card-image-3.jpg'
      },
      {
       src: 'assets/img/del/card-image-4.jpg'
      },
      {
       src: 'assets/img/del/card-image-5.jpg'
      },
      {
       src: 'assets/img/del/card-image-6.jpg'
      }
     ],
     mainClass: 'popup_gallery',
     type: 'image',
     closeOnContentClick: true,
     closeBtnInside: false,
     gallery: {
      enabled: true
     }
    });
   });
  },
  tooltipsMobile: function() {

   $('.js_tooltip').each(function() {
    if ($(window).width() < 576) {
     $(this).find('.js_tooltip_box').addClass('mfp-hide');
     $(this).magnificPopup({
      disableOn: function() {
       if( $(window).width() < 576 ) {
        return true;
       }
       return false;
      },
      type: 'inline',
      midClick: true
     });
    } else {
     $(this).find('.js_tooltip_box').removeClass('mfp-hide');
    }
   });
  }
 });

 project.init();

})(jQuery);
