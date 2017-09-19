import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor() {
    super()

    this.state = {
      search: {
        term:     'fine dinner',
        location: 'new york',
        sort_by:  'best_match',
        price:    '',
        limit:    21
      }
    }

    this.handleFilterDropdown       = this.handleFilterDropdown.bind(this)
    this.handlePriceDropdown        = this.handlePriceDropdown.bind(this)
    this.dropdownPick               = this.dropdownPick.bind(this)
    this.renderFilterDropdownValue  = this.renderFilterDropdownValue.bind(this)
    this.renderPriceDropdownValue   = this.renderPriceDropdownValue.bind(this)
    this.handleSubmit               = this.handleSubmit.bind(this)
    this.handleEnterKey             = this.handleEnterKey.bind(this)
  }

  handleFilterDropdown() {
    document.getElementById("search-filter-dropdown-content").classList.toggle("show");
  }

  handlePriceDropdown() {
    document.getElementById("search-price-dropdown-content").classList.toggle("show");
  }

  dropdownPick(event) {
    const field = event.target.parentElement.attributes.value.value
    const search = this.state.search
    search[field] = event.target.name
    this.setState({ search })

    if(field === 'sort_by') this.handleFilterDropdown()
    if(field === 'price') this.handlePriceDropdown()

    this.props.search(this.state.search)
  }

  renderFilterDropdownValue() {
    switch(this.state.search.sort_by) {
      case 'best_match':    return 'Best Match'
      case 'rating':        return 'Rating'
      case 'review_count':  return 'Review Count'
      case 'distance':      return 'Distance'
      default:              return 'Best Match'
    }
  }

  renderPriceDropdownValue() {
    switch(this.state.search.price) {
      case '1': return '$'
      case '2': return '$$'
      case '3': return '$$$'
      case '4': return '$$$$'
      default:  return 'Price?'
    }
  }

  handleEnterKey(event) { if(event.key === 'Enter') this.handleSubmit() }

  handleSubmit(event) {
    const search = this.state.search
    if(this.refs.term.value !== '') search['term'] = this.refs.term.value
    if(this.refs.location.value !== '') search['location'] = this.refs.location.value

    this.setState({ search })

    this.props.search(this.state.search)
  }

  componentDidMount() { this.props.search(this.state.search) }

  render() {
    return (
      <div className='seach-bar'>
        <input
          className='search-term'
          placeholder='What are you looking for?'
          ref='term'
          onKeyDown={ this.handleEnterKey }
          autoFocus />

        <input
          className='search-location'
          placeholder='Where?'
          ref='location'
          onKeyDown={ this.handleEnterKey } />

        <div name='' className="search-filter-dropdown-view">
          <input
            className="search-filter"
            type='text'
            value={ this.renderFilterDropdownValue() }
            ref='filter'
            onClick={ this.handleFilterDropdown }
            readOnly />

          <div id="search-filter-dropdown-content" className="search-filter-dropdown-content" value='sort_by'>
            <input name='best_match' value='Best Match' onClick={ this.dropdownPick } readOnly/>
            <input name='rating' value='Rating' onClick={ this.dropdownPick } readOnly/>
            <input name='review_count' value='Review Count' onClick={ this.dropdownPick } readOnly/>
            <input name='distance' value='Distance' onClick={ this.dropdownPick } readOnly/>
          </div>
        </div>

        <div className="search-price-dropdown-view">
          <input
            className="search-price"
            value={ this.renderPriceDropdownValue() }
            ref='price'
            onClick={ this.handlePriceDropdown }
            readOnly />

          <div id="search-price-dropdown-content" className="search-price-dropdown-content" value='price'>
            <input name='' value='None' onClick={ this.dropdownPick } readOnly/>
            <input name='1' value='$' onClick={ this.dropdownPick } readOnly/>
            <input name='2' value='$$' onClick={ this.dropdownPick } readOnly/>
            <input name='3' value='$$$' onClick={ this.dropdownPick } readOnly/>
            <input name='4' value='$$$$' onClick={ this.dropdownPick } readOnly/>
          </div>
        </div>

        <button
          className='search-button'
          onClick={ this.handleSubmit } >
            <img className='size-small' alt='search' src='./image/search.png' />
        </button>
      </div>
    )
  }
}
