$('.js-remove-item').on('click', function(e) {
  const target = $(this);
  const parent = target.closest('.js-item');

  parent.fadeOut(300, () => parent.remove());
  e.preventDefault();
});
