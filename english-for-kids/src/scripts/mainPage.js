import Cards from './cards';
import categoryInstance from './category';
import menuInstance from './menu';

const categoryCardTemplate = document.querySelector('#categoryTemplate');
const cardsList = document.querySelector('.cards__list');
const pageTitle = document.querySelector('#page-title-text');
const categoriesArr = Cards[0];

class MainPage {
  loadMainPage() {
    pageTitle.textContent = 'English for kids';
    cardsList.innerHTML = '';

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
    
      cardsList.append(categoryCard);
    });
  }
}

const mainPage = new MainPage();
mainPage.loadMainPage();

export default mainPage;
