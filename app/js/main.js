$(function () {
  $('.header-top__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--open');
  })
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--open');
  })


  $('.pick__tabss .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.pick__tabss').find('.tab-item').removeClass('active-tab').hide();
      $('.pick__tabss .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });


    $('.tab-inner__slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ['<img src="images/arrow-prev.svg">', '<img src="images/arrow-next.svg">'],
      //dots:true,
      dotsEach:true,
      responsive:{
          320:{
              items:1
          },
          650:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })


});

//new WOW().init();
AOS.init();