const search = $('.js-search-form');
const header = $('.js-header');
const btn = $('.js-search-btn');
const btnClose = $('.js-search-close');

btn.on('click', function() {
  search.addClass('is-open');
  header.addClass('is-search-open');
});

btnClose.on('click', function() {
  search.removeClass('is-open');
  header.removeClass('is-search-open');
});

$('.js-search-mob-btn').on('click', function() {
  $('.js-search-mob').fadeToggle('fast');

  if( $('.js-mob-menu').hasClass('is-open')) {
    $('.js-mob-menu').removeClass('is-open');
    $('.page').removeClass('is-hidden');
    $('.js-show-mob-menu').removeClass('is-active');
  }
});

$('.js-search-mob-close').on('click', function() {
  $('.js-search-mob').fadeOut('fast');
});
