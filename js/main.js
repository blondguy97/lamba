'use strict';


$('.blog-slider__inner').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '<button class="btn slider-btn slider-prev"><img src="img/blog/arrow-left.svg" alt=""></button>',
  nextArrow: '<button class="btn slider-btn slider-next"><img src="img/blog/arrow-right.svg" alt=""></button>'
});



$('.open-popup').click(function(event) {
  event.preventDefault();
  $('html').addClass('no-scroll');
  $('.popup-bg').fadeIn(600);
});


$('.close-popup').click(function() {
  $('html').removeClass('no-scroll');
  $('.popup-bg').fadeOut(600);
});

$('#mask-phone').mask("+7-(999)-999-99-99");

