import Cards from './cards';
import state from './state';

const cardTemplate = document.querySelector('#cardTemplate');
const cardsList = document.querySelector('.cards__list');
const pageTitle = document.querySelector('#page-title-text');
const cardsArr = Cards[1];

class Category {
  loadCategoryPage(category) {
    pageTitle.textContent = `${category.title}`;
    cardsList.innerHTML = '';

    const wordsList = cardsArr[category.index];

    wordsList.forEach((word) => {
      const wordCard = document.createElement('li');
      wordCard.classList.add('cards__item');
      wordCard.append(cardTemplate.content.cloneNode(true));

      const cardImg = wordCard.querySelectorAll('.card__img');
      cardImg.forEach(card => {
        card.setAttribute('src', `${word.image}`);
      })
      const cardAudio = wordCard.querySelector('.card__audio');
      cardAudio.setAttribute('src', `${word.audioSrc}`);
      const cardTitle = wordCard.querySelector('.card__title');
      cardTitle.textContent = `${word.word}`;
      const cardTranslation = wordCard.querySelector('.card__translation');
      cardTranslation.textContent = `${word.translation}`;
      const rotateCardBtn = wordCard.querySelector('.card__rotate');
      const cardFront = wordCard.querySelector('.card__front');
      const cardBack = wordCard.querySelector('.card__back');

      cardFront.addEventListener('click', () => {
        cardAudio.play();
      });

      rotateCardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        cardFront.classList.add('card__front--rotate');
        cardBack.classList.add('card__back--rotate');
      })

      cardBack.addEventListener('mouseleave', () => {
        cardFront.classList.remove('card__front--rotate');
        cardBack.classList.remove('card__back--rotate');
      })

      cardsList.append(wordCard);
    })
    
    if (state.play) {
      const cards = cardsList.querySelectorAll('.card--word');
      
      cards.forEach(card => {
        card.classList.add('card--play');
      })
    }
  }

  changeMode(mode) {
    const cards = cardsList.querySelectorAll('.card--word');

    cards.forEach(card => {
      if (mode) {
        card.classList.add('card--play');
      } else {
        card.classList.remove('card--play');
      }
    })
  }
}

const categoryInstance = new Category();
export default categoryInstance;