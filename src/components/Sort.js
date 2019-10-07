import React from 'react'
import { connect } from 'react-redux'
import { SORT_VALUES } from 'utils/constants'
import { sortMovies } from 'actions/movies'

const Sort = ({ sortMovies }) => {
  const onSortChange = e => {
    const sortOrder = e.target.value !== 'Sort by...' ? e.target.value : null
    sortMovies(sortOrder)
  }

  return (
    <div id="Sort">
      <select id="Sort_select" onChange={onSortChange}>
        <option>Sort by...</option>
        <option value={SORT_VALUES.EPISODE}>Episode</option>
        <option value={SORT_VALUES.YEAR}>Year</option>
      </select>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  sortMovies: sortOrder => dispatch(sortMovies(sortOrder)),
})

export default connect(
  null,
  mapDispatchToProps
)(Sort)
