import Cards from './cards';
import categoryInstance from './category';
import mainPage from './mainPage';

const categoriesArr = Cards[0];

const menuIcon = document.querySelector('.menu-icon__toggle');
const navigation = document.querySelector('#nav');
const overlay = document.querySelector('.overlay');
class Menu {
  loadMenu() {
    const categoryMenuItem = document.createElement('li');
    categoryMenuItem.classList.add('nav__item', 'nav__item--active');
    const categoryMenuLink = document.createElement('a');
    categoryMenuLink.classList.add('nav__link');
    categoryMenuLink.setAttribute('href', '#');
    categoryMenuLink.textContent = 'Main page';
    const categoryMenuIcon = document.createElement('img');
    categoryMenuIcon.classList.add('nav__icon');
    categoryMenuIcon.setAttribute('src', '../src/assets/img/icons/home.png');
    categoryMenuItem.append(categoryMenuIcon);
    categoryMenuItem.append(categoryMenuLink);

    categoryMenuItem.addEventListener('click', () => {
      navigation.classList.toggle('nav--visible');
      menuIcon.classList.toggle('menu-icon__toggle--open');
      overlay.classList.toggle('overlay--visible');
      document.body.classList.toggle('noScroll');

      mainPage.loadMainPage();
      this.changeActiveLink('Main page');
    });
    navigation.append(categoryMenuItem);

    categoriesArr.forEach((category) => {
      if (category.isVisibleInMenu) {
        const categoryMenuItem = document.createElement('li');
        categoryMenuItem.classList.add('nav__item');

        const categoryMenuLink = document.createElement('a');
        categoryMenuLink.classList.add('nav__link');
        categoryMenuLink.setAttribute('href', '#');
        categoryMenuLink.textContent = `${category.title}`;

        const categoryMenuIcon = document.createElement('img');
        categoryMenuIcon.classList.add('nav__icon');
        categoryMenuIcon.setAttribute('src', `../src/assets/img/icons/${category.title}.png`);

        categoryMenuItem.append(categoryMenuIcon);
        categoryMenuItem.append(categoryMenuLink);

        categoryMenuItem.addEventListener('click', () => {
          navigation.classList.toggle('nav--visible');
          menuIcon.classList.toggle('menu-icon__toggle--open');
          overlay.classList.toggle('overlay--visible');
          document.body.classList.toggle('noScroll');

          categoryInstance.loadCategoryPage(category);
          this.changeActiveLink(category.title);
        });
        navigation.append(categoryMenuItem);
      }
    });

    menuIcon.addEventListener('click', () => {
      navigation.classList.toggle('nav--visible');
      menuIcon.classList.toggle('menu-icon__toggle--open');
      overlay.classList.toggle('overlay--visible');
      document.body.classList.toggle('noScroll');
    });

    overlay.addEventListener('click', () => {
      menuIcon.click();
    });
  }

  changeActiveLink(clickedLink) {
    const navLinks = document.querySelectorAll('.nav__item');

    for (const item of navLinks) {
      item.classList.remove('nav__item--active');

      if (item.childNodes[1].textContent === clickedLink) {
        item.classList.add('nav__item--active');
      }
    }
  }
}

const menu = new Menu();
menu.loadMenu();

export default menu;
