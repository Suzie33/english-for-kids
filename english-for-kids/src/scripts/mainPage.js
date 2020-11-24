import Cards from './cards';
import Category from './category';

const categoryCardTemplate = document.querySelector('#categoryTemplate');
const cardsList = document.querySelector('.cards__list');
const categoriesArr = Cards[0];

categoriesArr.forEach((category) => {
  const categoryCard = document.createElement('li');
  categoryCard.classList.add('cards__item');
  categoryCard.append(categoryCardTemplate.content.cloneNode(true));

  const cardImg = categoryCard.querySelector('.card__img');
  cardImg.setAttribute('src', `${category.img}`);
  const cardTitle = categoryCard.querySelector('.card__title');
  cardTitle.textContent = `${category.title}`;

  categoryCard.addEventListener('click', () => {
    const categoryCurrent = new Category();

    categoryCurrent.loadCategoryPage(category);
  })

  cardsList.append(categoryCard);
});


