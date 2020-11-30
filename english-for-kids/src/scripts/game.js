import state from './state';
import mainPage from './mainPage';

const audioError = document.querySelector('.audio-error');
const audioCorrect = document.querySelector('.audio-correct');
const audioSuccess = document.querySelector('.audio-success');
const audioFailure = document.querySelector('.audio-failure');
const container = document.querySelector('#main-container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

class Game {
  init () {
    document.addEventListener('gameStarted', ()=> {
      state.gameActive = true;
      this.playCurrentSound();
    })
    
    document.addEventListener('cardClicked', (e) => {
      const targetSrc = state.randomArr[state.currentCard].src;
      const clickedCard = e.detail.wordCard.querySelector('.card')
      const clickedCardAudioSrc = e.detail.wordCard.querySelector('audio').src;
    
      if (clickedCard.classList.contains('card--disabled') === false) {
        if (clickedCardAudioSrc === targetSrc) {
          audioCorrect.play();
          clickedCard.classList.add('card--disabled');
          state.currentCard++;
          this.addStar('star');

          if (this.isGameFinished()) {
            this.finishGame();
          } else {
            setTimeout(this.playCurrentSound, 500);
          }
        } else {
          audioError.play();
          this.addStar('star--error');
          state.gameErrors++;
        }
      }
    })
  }

  playCurrentSound () {
    state.randomArr[state.currentCard].play();
  }

  addStar (starClass) {
    const starsContainer = document.querySelector('.stars');
    const star = document.createElement('li');
    star.classList.add(`${starClass}`);
    starsContainer.append(star);
  }

  isGameFinished () {
    return state.currentCard === state.randomArr.length;
  }

  finishGame () {
    header.style.visibility = 'hidden';
    footer.style.visibility = 'hidden';
    container.innerHTML = '';

    const gameResult = document.createElement('div');
    const gamePicture = document.createElement('div');
    const gameInfo = document.createElement('div');
    gameResult.classList.add('game-result');
    gameInfo.classList.add('game-info');

    if (state.gameErrors === 0) {
      audioSuccess.play();

      gameInfo.textContent = `You did it!`;
      gamePicture.classList.add('game-success');
      gameResult.append(gameInfo);
      gameResult.append(gamePicture);
    } else {
      audioFailure.play();

      gameInfo.textContent = `You made ${state.gameErrors} mistakes. Try again!`;
      gamePicture.classList.add('game-failure');
      gameResult.append(gameInfo);
      gameResult.append(gamePicture);
    }
    container.append(gameResult);

    setTimeout(mainPage.loadMainPage, 5000);
    state.gameActive = false;
    state.randomArr = [];
    state.currentCard = 0;
    state.gameErrors = 0;
  }

}

const game = new Game();
game.init();