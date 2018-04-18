const btn = $('.js-user-btn');
const menu = $('.js-user-menu');

btn.on('click', function() {
  menu.toggleClass('is-open');
});

menu.on('mouseleave', function(e) {
  const target = $(e.currentTarget);
  target.hasClass('is-open') && target.removeClass('is-open');
});

$('.js-show-mob-menu').on('click', function() {
  const target = $(this);

  target.toggleClass('is-active');
  $('.page').toggleClass('is-hidden');
  $('.js-mob-menu').toggleClass('is-open');
  $('.js-search-mob').fadeOut('fast');
});
