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
        sort_by: 'best_match',
        price: ''
      }
    }

    this.renderResults = this.renderResults.bind(this)
    this.handleFilterDropdown = this.handleFilterDropdown.bind(this)
    this.handlePriceDropdown = this.handlePriceDropdown.bind(this)
    this.dropdownPick = this.dropdownPick.bind(this)
    this.renderFilterDropdownValue = this.renderFilterDropdownValue.bind(this)
    this.renderPriceDropdownValue = this.renderPriceDropdownValue.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFilterDropdown() {
    document.getElementById("search-filter-dropdown-content").classList.toggle("show");
  }

  dropdownPick(event) {
    const field = event.target.name
    const search = this.state.search
    search[field] = event.target.value
    this.setState({ search })

    if(event.target.name === 'sort_by') this.handleFilterDropdown()
    if(event.target.name === 'price') this.handlePriceDropdown()
  }

  renderFilterDropdownValue() {
    switch(this.state.search.sort_by) {
      case 'best_match': return 'Best Match'
      case 'rating': return 'Rating'
      case 'review_count': return 'Review Count'
      case 'distance': return 'Distance'
      default: return 'Best Match'
    }
  }

  renderPriceDropdownValue() {
    switch(this.state.search.price) {
      case '1': return '$'
      case '2': return '$$'
      case '3': return '$$$'
      case '4': return '$$$$'
      default: return 'None'
    }
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
              <input ref='filter' onClick={ this.handleFilterDropdown } className="search-filter" value={ this.renderFilterDropdownValue() } readOnly />
              <div id="search-filter-dropdown-content" className="search-filter-dropdown-content">
                <input name='sort_by' value='best_match' onClick={ this.dropdownPick } placeholder='Best Match' readOnly/>
                <input name='sort_by' value='rating' onClick={ this.dropdownPick } placeholder='Rating' readOnly/>
                <input name='sort_by' value='review_count' onClick={ this.dropdownPick } placeholder='Review Count' readOnly/>
                <input name='sort_by' value='distance' onClick={ this.dropdownPick } placeholder='Distance' readOnly/>
              </div>
            </div>

            <div className="search-price-dropdown-view">
              <input ref='price' onClick={ this.handlePriceDropdown } className="search-price" value={ this.renderPriceDropdownValue() } readOnly />
              <div id="search-price-dropdown-content" className="search-price-dropdown-content">
                <input name='price' value='' onClick={ this.dropdownPick } placeholder='none' readOnly/>
                <input name='price' value={ 1 } onClick={ this.dropdownPick } placeholder='$' readOnly/>
                <input name='price' value={ 2 } onClick={ this.dropdownPick } placeholder='$$' readOnly/>
                <input name='price' value={ 3 } onClick={ this.dropdownPick } placeholder='$$$' readOnly/>
                <input name='price' value={ 4 } onClick={ this.dropdownPick } placeholder='$$$$' readOnly/>
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
