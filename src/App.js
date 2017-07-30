import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchYelpSearchResults } from './actions/searchActions'
import SearchResult from './components/SearchResult'

class App extends Component {
  componentDidMount() {
    this.props.fetchYelpSearchResults({ term: 'blink', location: 'new york' })
  }

  render() {
    let results = this.props.yelpResults.search
    if(Object.keys(results).length === 0 && results.constructor === Object) return null
    
    return (
      <div className="App">
        <div>
          <h1 className='title'>Lets Eat</h1>
          <input className='search-bar' placeholder='Type a restaurant name, location to search. . .'/>
          {
            results.map((result, i) => {
              return <SearchResult key={ i } result={ result } />
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    yelpResults: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchYelpSearchResults: input => {
      let action = fetchYelpSearchResults(input)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
