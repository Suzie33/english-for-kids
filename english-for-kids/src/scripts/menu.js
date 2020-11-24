const menuIcon = document.querySelector('.menu-icon__toggle');
const navigation = document.querySelector('#nav');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  navigation.classList.toggle('nav--visible');
  menuIcon.classList.toggle('menu-icon__toggle--open');
  overlay.classList.toggle('overlay--visible');
  document.body.classList.toggle('noScroll');
});