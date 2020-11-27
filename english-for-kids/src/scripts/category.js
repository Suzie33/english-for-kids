import Cards from './cards';
import state from './state';

const container = document.querySelector('#main-container');
const cardTemplate = document.querySelector('#cardTemplate');
// const cardsList = document.querySelector('.cards__list');
const pageTitle = document.querySelector('#page-title-text');
const cardsArr = Cards[1];
const btnsTemplate = document.querySelector('#btnsTemplate');

class Category {
  constructor () {
    this.btns = null;
    this.stars = null;
    this.wordCards = null;
    this.cardsList = null;
  }

  loadCategoryPage(category) {
    state.page = category.index + 1;
    container.classList.add('container--category');
    pageTitle.textContent = `${category.title}`;
    container.innerHTML = '';

    //render cards
    this.cardsList = document.createElement('ul');
    this.cardsList.classList.add('cards__list');

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
        if (!state.play) {
          cardAudio.play();
        }
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

      this.cardsList.append(wordCard);
      container.append(this.cardsList);
    })
    
    this.wordCards = this.cardsList.querySelectorAll('.card--word');
    
    if (state.play) {
      this.wordCards.forEach(card => {
        card.classList.add('card--play');
      })
    }

    //render additional elements
    this.stars = document.createElement('ul');
    this.stars.classList.add('stars');
    container.insertBefore(this.stars, container.firstChild);

    container.insertBefore(btnsTemplate.content.cloneNode(true), container.firstChild);
    this.btns = container.querySelector('.buttons');

    if (!state.play) {
      this.btns.classList.add('buttons--hidden');
      this.stars.classList.add('stars--hidden');
    }
  }

  changeMode(mode) {
    console.log(this.wordCards);
    this.wordCards.forEach(card => {
      if (mode) {
        card.classList.add('card--play');
      } else {
        card.classList.remove('card--play');
      }
    })

    if (mode && container.classList.contains('container--category')) {
      this.btns.classList.remove('buttons--hidden');
      this.stars.classList.remove('stars--hidden');
    } else if (!mode && container.classList.contains('container--category')) {
      this.btns.classList.add('buttons--hidden');
      this.stars.classList.add('stars--hidden');
    }
  }
}

const categoryInstance = new Category();
export default categoryInstance;