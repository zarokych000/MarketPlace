"use strict";

function mobileLinkMenu(arrowSelector, menuSelector) {
  const linkArrow = document.querySelector(arrowSelector);
  const menu = document.querySelector(menuSelector);

  linkArrow.addEventListener('click', (e) => { 
    if (e.target.classList.contains('top')){
      menu.style.cssText = '';
      linkArrow.classList.remove('top');
    } else {
      menu.style.cssText = `overflow: none; height: 100%; border: 4px solid #4668aa`;
      linkArrow.classList.add('top');
    }
  });


}

mobileLinkMenu('.link__mobile-arrow', ".link--header");