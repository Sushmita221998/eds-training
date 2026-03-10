import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
function renderImage(block){
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

export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  renderImage(block);
}
