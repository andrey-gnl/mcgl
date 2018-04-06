const modal = $('.js-modal');
const closeModal = $('.js-close-modal');
const showModal = $('.js-show-modal');

showModal.on('click', () => {
  $('body').addClass('is-blured');
  modal.fadeIn(300);
});

closeModal.on('click', () => {
  $('body').removeClass('is-blured');
  modal.fadeOut(300);
});
