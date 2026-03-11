export default function decorate(block) {
  // Render the external image
  const cells = block.querySelectorAll('div > div');
  cells.forEach(function (cell) {
    const links = cell.querySelectorAll('a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"]');

    links.forEach(function (link) {
      const img = document.createElement('img');
      img.src = link.href;
      img.alt = '';
      img.loading = 'lazy';
      link.replaceWith(img);
    });
  });
}
