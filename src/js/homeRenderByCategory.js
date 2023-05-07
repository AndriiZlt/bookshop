import { getRefs } from './homeRefs';
import { createBookCard } from './homeCreateBookCard';
import { fetchingByCategory } from './homeFetchFunctions';
import { renderingHomePage } from './homeRenderHomePage';
const { galleryRef } = getRefs();

export default function renderingByCategory(e) {
  console.log(e.target.innerHTML.trim());
  galleryRef.innerHTML = '';
  if (e.target.innerHTML.trim() === 'See more') {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<h2 class="gallery-title">${e.target.dataset.category
        .split(' ')
        .slice(0, length - 1)
        .join(' ')} <span>${e.target.dataset.category
        .split(' ')
        .pop()}</span></h2>`
    );
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery-list2"></div>`
    );
    var galleryListRef = document.querySelector('.gallery-list2');

    const query = e.target.dataset.category.split(' ').join('%20');
    fetchingByCategory(query).then(response =>
      response.map(book =>
        galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book))
      )
    );
    return;
  }
  if (e.target.innerHTML.trim() === 'All categories') {
    renderingHomePage();
    return;
  }

  // click on the categories section:
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<h2 class="gallery-title">${e.target.innerHTML
      .trim()
      .split(' ')
      .slice(0, length - 1)
      .join(' ')} <span>${e.target.innerHTML
      .trim()
      .split(' ')
      .pop()}</span></h2>`
  );
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery-list2"></div>`
  );
  var galleryListRef = document.querySelector('.gallery-list2');

  const query = e.target.innerHTML.trim().split(' ').join('%20');
  console.log('query', query);
  fetchingByCategory(query).then(response =>
    response.map(book =>
      galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book))
    )
  );
}