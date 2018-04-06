$('.js-change-edit').on('click', function(e) {
  const target = $(this);
  const items = target.closest('.js-items').find('.js-item');
  const parent = target.closest('.js-change');

  items.addClass('is-removable');
  parent.addClass('is-active');

  e.preventDefault();
});

$('.js-edit-cancel, .js-edit-save').on('click', function(e) {
  const target = $(this);
  const items = target.closest('.js-items').find('.js-item');
  const parent = target.closest('.js-change');

  items.removeClass('is-removable');
  parent.removeClass('is-active');

  e.preventDefault();
});
