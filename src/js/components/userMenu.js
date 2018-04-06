const btn = $('.js-user-btn');
const menu = $('.js-user-menu');

btn.on('click', function() {
  menu.toggleClass('is-open');
});

menu.on('mouseleave', function(e) {
  const target = $(e.currentTarget);
  target.hasClass('is-open') && target.removeClass('is-open');
});
