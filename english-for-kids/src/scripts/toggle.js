import state from './state';
import categoryInstance from './category';

const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', (e) => {
  e.stopPropagation();

  state.play = !state.play;
  categoryInstance.changeMode(state.play);
})