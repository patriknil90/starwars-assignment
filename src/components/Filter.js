import React from 'react'
import { connect } from 'react-redux'
import { filterMovies } from 'actions/movies'
import './Filter.scss'

const Filter = ({ filterMovies }) => {
  const onFilterChange = e => {
    const { value } = e.target
    filterMovies(value)
  }

  return (
    <div id="Filter">
      <input
        onChange={onFilterChange}
        id="Filter_input"
        placeholder="Search movie..."
        type="text"
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  filterMovies: filterValue => dispatch(filterMovies(filterValue)),
})

export default connect(
  null,
  mapDispatchToProps
)(Filter)
