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

// js edit inputs
$('.js-change-input').on('click', function(e) {
  const target = $(this);
  const items = target.closest('.js-edit').find('.js-edit-input');
  const parent = target.closest('.js-change');

  items.removeAttr('readonly');
  parent.addClass('is-active');

  e.preventDefault();
});

$('.js-edit-save-input').on('click', function(e) {
  const target = $(this);
  const items = target.closest('.js-edit').find('.js-edit-input');
  const parent = target.closest('.js-change');

  items.attr('readonly', true);
  parent.removeClass('is-active');

  e.preventDefault();
});

$('.js-edit-cancel-input').on('click', function(e) {
  const target = $(this);
  const allParent = target.closest('.js-edit');
  const items = allParent.find('.js-edit-input');
  const form = allParent.find('.js-form-edit');
  const parent = target.closest('.js-change');

  form.get(0).reset();
  items.attr('readonly', true);
  parent.removeClass('is-active');

  e.preventDefault();
});
