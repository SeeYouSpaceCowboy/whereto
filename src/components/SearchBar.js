import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='seach-bar'>
        <input className='search-term' placeholder='Type a restaurant name, category, etc to search. . .'/>
        <input className='search-location' placeholder='Location. . .'/>
        <input className='search-filter' placeholder='Price' />
      </div>
    )
  }
}
