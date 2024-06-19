const apiUrl = 'https://pixabay.com/api/';
const apiKey = '44463145-8dd3def1cdcb4fcdb78deec18';

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
});

export default class PixabayApi {
  constructor() {
    this.page = 1;
  }

  async fetchImages(searchQuery) {
    const url = `${apiUrl}?key=${apiKey}&q=${searchQuery}&${searchParams}&page=${this.page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
