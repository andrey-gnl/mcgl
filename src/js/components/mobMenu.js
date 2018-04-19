const menu = $('.js-navi-menu');
const link = $('.js-toggle-navi-menu');
link.on('click', function(e) {
  const target = $(this);
  const data = target.data('menu');
  target.toggleClass('is-open');

  if(target.hasClass('is-open')) {
    menu.not(`[data-menu="${data}"]`).hide();
    menu.filter(`[data-menu="${data}"]`).fadeIn();
  } else {
    menu.fadeOut();
  }

  link.not(`[data-menu="${data}"]`).removeClass('is-open');

  e.preventDefault();
});
