import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchYelpSearchResults } from './actions/searchActions'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: {
        term: 'food',
        location: 'queens'
      }
    }

    this.renderResults = this.renderResults.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const search = this.state.search
    search['term'] = this.refs.term.value
    search['location'] = this.refs.location.value
    this.setState({ search })
    this.props.fetchYelpSearchResults(this.state.search)
  }

  renderResults(results) {
    if(Object.keys(results).length !== 0 && results.constructor !== Object) {
      return(
        <div>
          {
            results.map((result, i) => {
              return <a key={ i } href={ result.url }><SearchResult result={ result } /></a>
            })
          }
        </div>
      )
    }
  }

  componentDidMount() {
    this.props.fetchYelpSearchResults(this.state.search)
  }

  render() {
    let results = this.props.yelpResults.search
    debugger

    return (
      <div className="App">
        <div>
          <h1 className='title'>WhereTo</h1>
          <div className='seach-bar'>
            <input
              ref='term'
              className='search-term'
              placeholder='Type a restaurant name, category, etc to search. . .'
              onChange={ this.handleChange } />
            <input
              ref='location'
              className='search-location'
              placeholder='Location. . .' />
            <input
              className='search-filter'
              placeholder='Price' />
            <button className='search-button' onClick={ this.handleClick } ><img className='size-small' alt='search' src='./image/search.png' /></button>
          </div>
          <div>
            { this.renderResults(results) }
          </div>
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
