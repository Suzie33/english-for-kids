import state from './state';

document.addEventListener('gameStarted', ()=> {
  state.gameActive = true;
  state.randomArr[0].play();
})