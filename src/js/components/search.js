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
