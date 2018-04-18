import ellipsis from './ellipsis';

// hero slider
$('.js-slider').slick({
  dots: true,
  prevArrow: '.js-slider-prev',
  nextArrow: '.js-slider-next',
  autoplay: 4000,
  pauseOnHover: false,
  speed: 1000
});

// channel slider
{
  const slider = $('.js-v-slider');

  slider.slick({
    vertical: true,
    prevArrow: '.js-v-slider-prev',
    nextArrow: '.js-v-slider-next',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false
        }
      }
    ]
  });

  $(window).on('resize', () => {
    slider.slick('resize');
  });

  slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    const target = $(e.currentTarget);
    const parent = target.closest('.js-v-slider-parent');
    const tabs = parent.find('.js-v-slider-tab');

    tabs.filter(`:not(:nth-child(${nextSlide + 1}))`).hide();
    tabs.eq(nextSlide).fadeIn();

    // initialize for ellipsed text
    const ellipsisTextToInit = tabs.eq(nextSlide).find('.js-ellipsis:not(.is-not-inited)');
    ellipsis.init(ellipsisTextToInit);
  });
}

// items slider
{
  $('.js-items-gallery').slick({
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: 'unslick'
      }
    ]
  });
  $(window).on('resize', () => {
    $('.js-items-gallery').slick('resize');
  });
}
