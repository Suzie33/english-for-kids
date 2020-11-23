import './css/main.scss';

import './scripts/cards';
import './scripts/category';

// menu-btn

const menuIcon = document.querySelector('.menu-icon__toggle');
const navigation = document.querySelector('#nav');

menuIcon.addEventListener('click', () => {
  navigation.classList.toggle('nav--visible');
  menuIcon.classList.toggle('menu-icon__toggle--open');
  document.body.classList.toggle('noScroll');
});
