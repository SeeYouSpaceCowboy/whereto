import React, { Component } from 'react'
import SearchResult from './SearchResult'

export default class SearchResultGrid extends Component {
  constructor() {
    super()

    this.renderResults = this.renderResults.bind(this)
  }

  renderResults(results) {
    if(Object.keys(results).length !== 0 && results.constructor !== Object) {
      return(
        <div className='search-result-grid'>
          { results.map((result, i) => <SearchResult key={ i } result={ result } />) }
        </div>
      )
    }
  }

  render() {
    const results = this.props.results

    if(!results) return null

    return <div>{ this.renderResults(this.props.results) }</div>
  }
}
