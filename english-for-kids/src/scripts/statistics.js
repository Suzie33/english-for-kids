import Cards from './cards';

const container = document.querySelector('#main-container');

class Stats {
  constructor () {
    this.cardsArr = [];
  }

  getStatistics () {
    this.cardsArr = JSON.parse(localStorage.getItem('statistics'));

    if (localStorage.getItem('statistics') === null) {
      this.cardsArr = Cards[1];
    }
  }

  loadStatsPage () {
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

    this.cardsArr.forEach(group => {
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
      localStorage.removeItem('statistics');

      Cards[1].forEach(group => {
        group.forEach(word => {
          word.trained = 0;
          word.correct = 0;
          word.errors = 0;
          word['%'] = 0;
        })
      })

      this.loadStatsPage();
    })

    statsBtns.append(repeatBtn);
    statsBtns.append(resetBtn);

    container.prepend(statsBtns);
  }
}

const stats = new Stats();
export default stats;
