import Cards from './cards';
import categoryInstance from './category';
import stats from './statistics';
import menuInstance from './menu';
import Icon from '../assets/img/icons/abc.png';
import state from './state';

const container = document.querySelector('#main-container');
const categoryCardTemplate = document.querySelector('#categoryTemplate');
const pageTitle = document.querySelector('#page-title-text');
const categoriesArr = Cards[0];
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const statsBtn = document.querySelector('.stats-btn');

class MainPage {
  init() {
    const appIcon = document.createElement('link');
    appIcon.rel = 'icon';
    appIcon.href = Icon;
    document.querySelector('head').append(appIcon);
  }

  loadMainPage() {
    header.style.visibility = 'visible';
    footer.style.visibility = 'visible';
    state.page = 0;
    pageTitle.textContent = 'English for kids';
    container.innerHTML = '';

    const categoriesList = document.createElement('ul');
    categoriesList.classList.add('cards__list');

    categoriesArr.forEach((category) => {
      if (category.isVisibleInMenu) {
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
      }
    });

    statsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stats.loadStatsPage();
    })
  }
}

const mainPage = new MainPage();
mainPage.init();
mainPage.loadMainPage();

export default mainPage;
