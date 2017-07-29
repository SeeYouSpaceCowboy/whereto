import { searchAdapter } from '../adapters/searchAdapter'

export const fetchYelpSearchResults = input => {
  const response = searchAdapter.fetchYelpSearchResults(input)

  return {
    type: 'FETCH_YELP_SEARCH_RESULTS',
    payload: response
  }
}
