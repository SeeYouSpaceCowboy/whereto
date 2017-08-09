import React, { Component } from 'react'

export default class SearchResult extends Component {
  render() {
    let result = this.props.result

    return (
      <div className='search-result'>
        <img className='size-large search-result-img' src={ result.image_url } alt='No Image :('/>
        <div className='search-result-info'>
          <h2>{ result.name }</h2>
          <h4>{ result.rating } Stars - { result.review_count } Reviews</h4>
          <h5>
            { result.price }
            {
              result.transactions.map((transaction, i) => {
                if(transaction === 'delivery') {
                  return <span key={ i }> Delivery</span>
                } else {
                  return <span key={ i }> Pick-Up</span>
                }
              })
            }
          </h5>
          <p>{ result.location.address1 }, { result.location.city } { result.location.state }</p>
          <p>{ result.display_phone }</p>
          <div className='search-result-category'>
            <span className='search-result-category-tags'>{ result.categories[0].title } </span>
          </div>
          <a href={ result.url } target='_blank'><button className='search-result-button'>View</button></a>
        </div>
      </div>
    )
  }
}
