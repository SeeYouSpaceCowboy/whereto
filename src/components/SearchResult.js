import React, { Component } from 'react'

export default class SearchResult extends Component {
  render() {
    let result = this.props.result

    return (
      <div className='search-result'>
        <img className='size-large' src={ result.image_url } alt='restaurant'/>
        <h2>{ result.name } { result.price } Rating { result.rating }</h2>
        <h4>{ result.location.address1 }</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}
