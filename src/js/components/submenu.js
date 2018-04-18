const btn = $('.js-toggle-submenu');

btn.on('click', function() {
  const target = $(this);
  const parent = target.closest('.js-submenu-parent');
  const menu = parent.find('.js-submenu');

  target.toggleClass('is-open');
  menu.slideToggle('fast');
});
