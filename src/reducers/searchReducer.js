export default function searchReducer(state = { search: {} }, action) {
  switch(action.type) {
    case 'FETCH_YELP_SEARCH_RESULTS': return { ...state, search: action.payload }
    default: return state
  }
}
