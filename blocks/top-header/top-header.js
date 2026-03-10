export default function decorate(block) {
  const table = block.querySelector('table');
  if (!table) return;
  const cells = table.querySelectorAll('td');
  const row = document.createElement('div');
  row.classList.add('row');
  const leftCol = document.createElement('div');
  leftCol.classList.add('top-left');
  const rightCol = document.createElement('div');
  rightCol.classList.add('top-right');
  if (cells[0]) {
    leftCol.append(cells[0].childNodes);
  }
  if (cells[1]) {
    rightCol.append(cells[1].childNodes);
  }
  row.append(leftCol, rightCol);
  block.textContent = '';
  block.append(row);
}
