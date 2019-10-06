import React from 'react'
import { connect } from 'react-redux'

const movieList = ({ movies }) => (
  <section>
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className="MovieItem">
          <span className="MovieItem_title">{movie.fields.title}</span>
        </li>
      ))}
    </ul>
  </section>
)

const mapStateToProps = state => ({
  movies: state.movies.movies,
})

export default connect(mapStateToProps)(movieList)
