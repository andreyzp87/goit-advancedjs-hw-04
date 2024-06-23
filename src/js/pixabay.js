import axios from 'axios';

const apiUrl = 'https://pixabay.com/api/';
const apiKey = '44463145-8dd3def1cdcb4fcdb78deec18';

export default class PixabayApi {
  constructor() {
    this.page = 1;
    this.pageSize = 40;
  }

  async fetchImages(searchQuery) {
    const response = await axios.get(apiUrl, {
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: apiKey,
        q: searchQuery,
        page: this.page,
        per_page: this.pageSize,
      },
    });

    return response.data;
  }
}
