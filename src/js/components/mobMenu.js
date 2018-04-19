const menu = $('.js-navi-menu');
const link = $('.js-toggle-navi-menu');
link.on('click', function(e) {
  const target = $(this);
  const data = target.data('menu');
  target.toggleClass('is-active');

  if(target.hasClass('is-active')) {
    menu.not(`[data-menu="${data}"]`).hide();
    menu.filter(`[data-menu="${data}"]`).fadeIn();
  } else {
    menu.fadeOut();
  }

  link.not(`[data-menu="${data}"]`).removeClass('is-active');

  e.preventDefault();
});
