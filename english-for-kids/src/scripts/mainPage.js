import Cards from './cards';
import categoryInstance from './category';
import menuInstance from './menu';
import Icon from '../assets/img/icons/abc.png';
import state from './state';

const container = document.querySelector('#main-container');
const categoryCardTemplate = document.querySelector('#categoryTemplate');
const pageTitle = document.querySelector('#page-title-text');
const categoriesArr = Cards[0];

class MainPage {
  init() {
    const appIcon = document.createElement('link');
    appIcon.rel = 'icon';
    appIcon.href = Icon;
    document.querySelector('head').append(appIcon);
  }

  loadMainPage() {
    state.page = 0;
    pageTitle.textContent = 'English for kids';
    container.innerHTML = '';

    const categoriesList = document.createElement('ul');
    categoriesList.classList.add('cards__list');

    categoriesArr.forEach((category) => {
      const categoryCard = document.createElement('li');
      categoryCard.classList.add('cards__item');
      categoryCard.append(categoryCardTemplate.content.cloneNode(true));
    
      const cardImg = categoryCard.querySelector('.card__img');
      cardImg.setAttribute('src', `${category.img}`);
      const cardTitle = categoryCard.querySelector('.card__title');
      cardTitle.textContent = `${category.title}`;
    
      categoryCard.addEventListener('click', () => {
        categoryInstance.loadCategoryPage(category);
        menuInstance.changeActiveLink(category.title);
      })
    
      categoriesList.append(categoryCard);
      container.append(categoriesList);
    });
  }
}

const mainPage = new MainPage();
mainPage.init();
mainPage.loadMainPage();

export default mainPage;
