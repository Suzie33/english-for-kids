import state from './state';

const audioError = document.querySelector('.audio-error');
const audioCorrect = document.querySelector('.audio-correct');
const audioSuccess = document.querySelector('.audio-success');
const audioFailure = document.querySelector('.audio-failure');

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
    if (state.gameErrors === 0) {
      audioSuccess.play();
    } else {
      audioFailure.play();
    }
    console.log(state.gameErrors);
  }
}

const game = new Game();
game.init();