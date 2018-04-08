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
  form.find('input').change();
  items.attr('readonly', true);
  parent.removeClass('is-active');

  e.preventDefault();
});

// js edit profile
$('.js-change-edit-profiles').on('click', function(e) {
  const target = $(this);
  const parentAll = target.closest('.js-profiles');
  const inputs = parentAll.find('.js-edit-profile-input');
  const profile = parentAll.find('.js-edit-profile');
  const parent = target.closest('.js-change');

  profile.addClass('is-removable');
  inputs.removeAttr('readonly');
  parent.addClass('is-active');

  e.preventDefault();
});

$('.js-edit-save-profiles').on('click', function(e) {
  const target = $(this);
  const parentAll = target.closest('.js-profiles');
  const inputs = parentAll.find('.js-edit-profile-input');
  const profile = parentAll.find('.js-edit-profile');
  const parent = target.closest('.js-change');

  inputs.attr('readonly', true);
  profile.removeClass('is-removable');
  parent.removeClass('is-active');

  e.preventDefault();
});

$('.js-edit-cancel-profiles').on('click', function(e) {
  const target = $(this);
  const parentAll = target.closest('.js-profiles');
  const inputs = parentAll.find('.js-edit-profile-input');
  const form = parentAll.find('.js-form-edit-profile');
  const profile = parentAll.find('.js-edit-profile');
  const parent = target.closest('.js-change');

  form.get(0).reset();
  form.find('input').change();
  inputs.attr('readonly', true);
  profile.removeClass('is-removable');
  parent.removeClass('is-active');

  e.preventDefault();
});

// js edit pin
$('.js-change-edit-pin').on('click', function(e) {
  const target = $(this);
  const parent = target.closest('.js-change');
  const parentAll = target.closest('.js-pin');
  const form = parentAll.find('.js-form-pin-wrapper');

  parent.removeClass('is-active');
  form.addClass('is-edit');
  parent.addClass('is-active');

  e.preventDefault();
});

$('.js-edit-save-pin').on('click', function(e) {
  const target = $(this);
  const parent = target.closest('.js-change');
  const parentAll = target.closest('.js-pin');
  const form = parentAll.find('.js-form-pin-wrapper');

  parent.removeClass('is-active');
  form.removeClass('is-edit');

  e.preventDefault();
});

$('.js-edit-cancel-pin').on('click', function(e) {
  const target = $(this);
  const parent = target.closest('.js-change');
  const parentAll = target.closest('.js-pin');
  const formWrapper = parentAll.find('.js-form-pin-wrapper');
  const form = parentAll.find('.js-form-pin');

  parent.removeClass('is-active');
  form.get(0).reset();
  form.find('input').change();
  formWrapper.removeClass('is-edit');

  e.preventDefault();
});
