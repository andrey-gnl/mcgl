import 'slick-carousel';
import svg4everybody from 'svg4everybody';
import './components';

svg4everybody();

{
  const cloneParent = $('.js-copy');
  const cloneItems = cloneParent.find('> .card').clone();
  $('.js-show-more-blocks').on('click', (e) => {
    cloneParent.append(cloneItems.clone());

    e.preventDefault();
  });
}
