import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchYelpSearchResults } from './actions/searchActions'
import SearchBar from './components/SearchBar'
import SearchResultGrid from './components/SearchResultGrid'

class App extends Component {
  constructor() {
    super()

    this.fetchResults = this.fetchResults.bind(this)
  }

  fetchResults(state) { this.props.fetchYelpSearchResults(state) }

  render() {
    let results = this.props.yelpResults.search

    return (
      <div className="App">
        <div>
          <h1 className='title'>WhereTo</h1>

          <SearchBar executeSearch={ this.fetchResults }/>

          <SearchResultGrid results={ results }/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { yelpResults: state.search }
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
