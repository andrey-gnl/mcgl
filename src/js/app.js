import 'slick-carousel';
import 'trunk8';
import svg4everybody from 'svg4everybody';

svg4everybody();

$(document).ready(function() {
  $('.js-user-btn').on('click', function() {
    $('.js-user-menu').toggleClass('is-open');
  });

  $('.js-slider').slick({
    dots: true,
    prevArrow: '.js-slider-prev',
    nextArrow: '.js-slider-next'
  });

  $('.js-v-slider').slick({
    vertical: true,
    prevArrow: '.js-v-slider-prev',
    nextArrow: '.js-v-slider-next'
  });

  $('.js-items-gallery').slick({
    arrows: true,
    slidesToShow: 4,
    infinite: false
  });

  $('.js-ellipsis').each((i, item) => {
    const target = $(item);
    const parent = target.parents('.js-ellipsis-parent');

    target.trunk8({
      fill: '&hellip;',
      lines: 3,
      onTruncate() {
        parent.addClass('is-truncuted');
      }
    });
  });

  $('.js-ellipsis-toggle').on('click', function() {
    const target = $(this);
    const parent = target.closest('.js-ellipsis-parent');
    const ellipsed = parent.find('.js-ellipsis');

    parent.toggleClass('is-open');

    if(parent.hasClass('is-open')) {
      ellipsed.trunk8('revert');
    } else {
      ellipsed.trunk8();
    }
  });

  {
    const search = $('.js-search-form');
    const header = $('.js-header');
    const btn = $('.js-search-btn');
    const btnClose = $('.js-search-close');

    btn.on('click', function() {
      search.addClass('is-open');
      header.addClass('is-search-open');
    });

    btnClose.on('click', function() {
      search.removeClass('is-open');
      header.removeClass('is-search-open');
    });
  }

  {
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
  }

  {
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
  }


});
