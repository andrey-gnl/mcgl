// $('.js-ellipsis').each((i, item) => {
//   const target = $(item);
//   const parent = target.parents('.js-ellipsis-parent');

//   target.trunk8({
//     fill: '&hellip;',
//     lines: 3,
//     onTruncate() {
//       parent.addClass('is-truncuted');
//     }
//   });
// });

// $('.js-ellipsis-toggle').on('click', function() {
//   const target = $(this);
//   const parent = target.closest('.js-ellipsis-parent');
//   const ellipsed = parent.find('.js-ellipsis');

//   parent.toggleClass('is-open');

//   if(parent.hasClass('is-open')) {
//     ellipsed.trunk8('revert');
//   } else {
//     ellipsed.trunk8();
//   }
// });

const ellipsis = {
  init(el = $('.js-ellipsis')) {

    el.each((i, item) => {
      const target = $(item);
      const text = target.find('> p');
      const initialHeight = text.height();
      const maxHeight = target.height();
      const parent = target.closest('.js-ellipsis-parent');
      const fullText = text.text();
      const button = parent.find('.js-ellipsis-toggle');
      let needButton = false;

      initialHeight > maxHeight && (needButton = true);
      if(!text.is(':visible')) {
        parent.addClass('is-not-inited');
        return false;
      }


      while (text.height() > maxHeight) {
        text.text(text.text().replace(/\W*\s(\S)*$/, '...'));
      }
      parent.removeClass('is-not-inited');

      if(needButton) {
        parent.addClass('is-truncuted');
        target.append('<div class="clone" />');
        const clone = parent.find('.clone');
        clone.text(fullText);

        button.on('click', function() {
          parent.toggleClass('is-open');

          if(parent.hasClass('is-open')) {
            text.hide();
            clone.show();

            target.animate( { height: `${initialHeight}px` }, { queue: false, duration: 300 });
          } else {
            target.animate( { height: '63px' }, { queue: false, duration: 300,
              complete() {
                text.show();
                clone.hide();
              } });
          }
        });

      }
    });
  }
};

ellipsis.init();


export default ellipsis;

