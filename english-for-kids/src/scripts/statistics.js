import Cards from './cards';

const container = document.querySelector('#main-container');

const cardsArr = Cards[1];

class Stats {
  loadStatsPage () {
    container.innerHTML = '';
    
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

    cardsArr.forEach(group => {
      group.forEach(word => {
        const tableRow = document.createElement('tr');
        tableRow.classList.add('stats-table__row');

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
  }
}

const stats = new Stats();
export default stats;
