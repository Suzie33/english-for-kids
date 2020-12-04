import Cards from './cards';
import categoryInstance from './category';

const container = document.querySelector('#main-container');
const pageTitle = document.querySelector('#page-title-text');
let cardsWords = Cards[1];

class Stats {
  getStatistics () {
    cardsWords = JSON.parse(localStorage.getItem('statistics'));

    if (!cardsWords) {
      cardsWords = Cards[1];
    } else {
      const filteredArr = cardsWords[cardsWords.length - 1];
      filteredArr.forEach(card => {
        for (let i = 0; i < cardsWords.length - 1; i++) {
          for (let j = 0; j < cardsWords[i].length; j++) {
            if (cardsWords[i][j].word === card.word) {
              cardsWords[i][j].trained = card.trained;
              cardsWords[i][j].correct = card.correct;
              cardsWords[i][j].errors = card.errors;
              cardsWords[i][j]['%'] = parseInt((1 - cardsWords[i][j].errors / (cardsWords[i][j].correct + cardsWords[i][j].errors)) * 100);
              if (isNaN(cardsWords[i][j]['%'])) cardsWords[i][j]['%'] = 0;
            }
          }
        }
      })
      cardsWords[cardsWords.length - 1] = [];
      localStorage.setItem('statistics', JSON.stringify(cardsWords));
      console.log(filteredArr, cardsWords[cardsWords.length - 1]);
    }
  }

  loadStatsPage () {
    pageTitle.textContent = `Statistics`;
    container.innerHTML = '';

    this.getStatistics();
    
    const statsTable = document.createElement('table');
    statsTable.classList.add('stats-table');

    const tableRow = document.createElement('tr');
    tableRow.classList.add('stats-table__row');

    const tableHeaders = ['category', 'word', 'translation', 'trained', 'correct', 'errors', '%'];

    tableHeaders.forEach(item => {
      const tableHeader = document.createElement('th');
      tableHeader.classList.add('stats-table__header');
      tableHeader.textContent = `${item}`;
      tableRow.append(tableHeader);
    })

    statsTable.append(tableRow);

    cardsWords.forEach(group => {
      group.forEach(word => {
        const tableRow = document.createElement('tr');
        tableRow.classList.add('stats-table__row');

        word['%'] = parseInt((1 - word.errors / (word.correct + word.errors)) * 100);
        if (isNaN(word['%'])) word['%'] = 0;

        for (const prop in word) {
          if (tableHeaders.includes(prop)) {
            const tableCell = document.createElement('td');
            tableCell.classList.add('stats-table__cell');
            tableCell.textContent = `${word[prop]}`;

            tableRow.append(tableCell);
          }
        }

        statsTable.append(tableRow);
      })
    })
    
    const tableWrap = document.createElement('div');
    tableWrap.classList.add('stats-wrap');
    tableWrap.append(statsTable);

    container.append(tableWrap);

    this.renderBtns();
  }

  renderBtns () {
    const statsBtns = document.createElement('div');
    statsBtns.classList.add('stats-btns');
    const repeatBtn = document.createElement('button');
    repeatBtn.classList.add('stats-btns__repeat');
    repeatBtn.textContent = 'Repeat difficult words';
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('stats-btns__reset');
    resetBtn.textContent = 'Reset';

    resetBtn.addEventListener('click', () => {
      cardsWords.forEach(group => {
        group.forEach(word => {
          word.trained = 0;
          word.correct = 0;
          word.errors = 0;
          word['%'] = 0;
        })
      })

      localStorage.setItem('statistics', JSON.stringify(cardsWords));

      this.loadStatsPage();
    })

    repeatBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      const filteredArr = [];

      for (let i = 0; i < cardsWords.length - 1; i++) {
        for (let j = 0; j < cardsWords[i].length; j++) {
          if (cardsWords[i][j]['%'] !== 0 && cardsWords[i][j]['%'] !== 100) {
            filteredArr.push(cardsWords[i][j]);
          }
        }
      }

      cardsWords = JSON.parse(localStorage.getItem('statistics'));
      cardsWords.splice(-1, 1, filteredArr);
      localStorage.setItem('statistics', JSON.stringify(cardsWords));

      categoryInstance.loadCategoryPage({
        title: 'Repeat',
        img: '',
        index: 8,
        isVisibleInMenu: false,
      })
    })

    statsBtns.append(repeatBtn);
    statsBtns.append(resetBtn);

    container.prepend(statsBtns);
  }
}

const stats = new Stats();
export default stats;
