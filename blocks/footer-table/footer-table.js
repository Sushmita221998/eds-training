export default function decorate(block) {
  const cells=block.querySelectorAll('div > div');
  cells.forEach(function (cell){
    const links = cell.querySelectorAll('a');

    links.forEach(function (link){
    const img = document.createElement('img');
    img.src = link.href;
    img.alt = '';
    img.loading = 'lazy';
    link.replaceWith(img);
  });
  });
}
