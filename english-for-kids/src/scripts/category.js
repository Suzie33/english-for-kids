import Cards from './cards';

const categoryCardTemplate = document.querySelector('#categoryTemplate');
const categoriesList = document.querySelector('.categories__list');
const categoriesArr = Cards[0];

categoriesArr.forEach((category) => {
  const categoryCard = document.createElement('li');
  categoryCard.classList.add('categories__item');
  categoryCard.append(categoryCardTemplate.content.cloneNode(true));

  const cardImg = categoryCard.querySelector('.card__img');
  cardImg.setAttribute('src', `${category.img}`);
  const cardTitle = categoryCard.querySelector('.card__title');
  cardTitle.textContent = `${category.title}`;

  categoriesList.append(categoryCard);
});
