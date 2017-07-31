import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchYelpSearchResults } from './actions/searchActions'
import SearchResult from './components/SearchResult'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: {
        term: 'food',
        location: 'queens',
        sort_by: 'rating',
        price: 1
      }
    }

    this.renderResults = this.renderResults.bind(this)
    this.handleFilterDropdown = this.handleFilterDropdown.bind(this)
    this.handlePriceDropdown = this.handlePriceDropdown.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFilterDropdown() {
    document.getElementById("search-filter-dropdown-content").classList.toggle("show");
  }

  handlePriceDropdown() {
    document.getElementById("search-price-dropdown-content").classList.toggle("show");
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
              return <SearchResult key={ i } result={ result } />
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

            <div className="search-filter-dropdown-view">
              <input onClick={ this.handleFilterDropdown } className="search-filter" value='Best Match' readonly='readonly'/>
              <div id="search-filter-dropdown-content" className="search-filter-dropdown-content">
                <a href="#home">Best Match</a>
                <a href="#about">Rating</a>
                <a href="#contact">Review Count</a>
                <a href="#contact">Distance</a>
              </div>
            </div>

            <div className="search-price-dropdown-view">
              <input onClick={ this.handlePriceDropdown } className="search-price" value='Price' readonly='readonly'/>
              <div id="search-price-dropdown-content" className="search-price-dropdown-content">
                <a href="#home">$</a>
                <a href="#about">$$</a>
                <a href="#contact">$$$</a>
                <a href="#contact">$$$$</a>
              </div>
            </div>

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
