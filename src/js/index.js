import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import PixabayApi from './pixabay';

const pixabayApi = new PixabayApi();

const searchForm = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

let searchQuery = '';

function onSearch(e) {
  e.preventDefault();

  searchQuery = e.currentTarget.searchQuery.value.trim();

  if (!searchQuery) {
    return;
  }

  loader.classList.remove('hidden');
  loadMoreButton.classList.add('hidden');

  resetGallery();

  pixabayApi.page = 1;
  pixabayApi
    .fetchImages(searchQuery)
    .then(data => {
      if (data.totalHits === 0) {
        throw new Error();
      }

      renderGalleryImages(data);
      loadMoreButton.classList.remove('hidden');

      iziToast.success({
        title: 'Success',
        message: `Hooray! We found ${data.totalHits} images.`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Try again.',
        position: 'topRight',
      });
    });

  e.currentTarget.reset();
}

function onLoadMore() {
  loader.classList.remove('hidden');
  pixabayApi.page += 1;
  pixabayApi
    .fetchImages(searchQuery)
    .then(data => {
      renderGalleryImages(data);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'No images found',
        position: 'topRight',
      });
    });
}

function renderGalleryImages(data) {
  gallery.insertAdjacentHTML(
    'beforeend',
    data.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<div class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${downloads}</span>
          </p>
        </div>
        </div>`;
        }
      )
      .join('')
  );

  loader.classList.add('hidden');

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

function resetGallery() {
  gallery.innerHTML = '';
}
