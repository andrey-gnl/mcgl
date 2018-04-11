$('.js-close-login').on('click', function(e) {
  const target = $(this);
  const parent = target.closest('.js-login');

  parent.fadeOut();
  e.preventDefault();
});
