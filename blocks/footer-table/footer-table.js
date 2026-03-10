export default function decorate(block) {
  const link = block.querySelector('a');
  if (link) {
    const imageUrl = link.href;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = link.textContent;
    img.loading = 'lazy';
    block.textContent = '';
    block.appendChild(img);
  }
}
