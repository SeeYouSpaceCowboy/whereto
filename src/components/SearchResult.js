import React, { Component } from 'react'

export default class SearchResult extends Component {
  render() {
    let result = this.props.result

    return (
      <div className='search-result'>
        <img className='size-large search-result-img' src={ result.image_url } alt='restaurant'/>
        <div className='search-result-info'>
          <h2>{ result.name } { result.display_phone }</h2>
          <p>{ result.location.address1 }, { result.location.city } { result.location.state }</p>
          <p>
            {
              result.transactions.map((transaction, i) => {
                return <span key={ i }>{ transaction } </span>
              })
            }
          </p>
          <h4>{ result.price } { result.rating } Stars { result.review_count } Reviews</h4>
          <div className='search-result-category'>
            {
              result.categories.map((category, i) => {
                return <span className='search-result-category-tags' key={ i }>{ category.title } </span>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
