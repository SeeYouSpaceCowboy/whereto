import axios from 'axios'

const dev_url = 'http://localhost:3005/'
axios.defaults.baseURL = dev_url

export const searchAdapter = {
  fetchYelpSearchResults: query => {
    return axios.post(null, query)
      .then(response => response.data.yelp)
      .catch(error => error)
  }
}
