import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchYelpSearchResults } from './actions/searchActions'
import SearchResult from './components/SearchResult'

class App extends Component {
  componentDidMount() {
    this.props.fetchYelpSearchResults({ term: 'food', location: 'new york' })
  }

  render() {
    let results = this.props.yelpResults
    debugger
    return (
      <div className="App">
        <div>
          <h1 className='title'>Lets Eat</h1>
          <input className='search-bar' placeholder='Type a restaurant name, location to search. . .'/>
          <SearchResult />
          <SearchResult />
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
