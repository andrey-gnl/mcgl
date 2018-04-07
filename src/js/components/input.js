const input = $('.js-input');

input.on('blur change', function() {
  const target = $(this);

  if(target.val().length) {
    target.addClass('is-filled');
  } else {
    target.removeClass('is-filled');
  }
});

input.each((i, item) => $(item).val().length && $(item).addClass('is-filled'));
