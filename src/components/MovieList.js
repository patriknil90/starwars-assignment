import React from 'react'
import { connect } from 'react-redux'
import MovieItem from 'components/MovieItem'

const movieList = ({ movies, loading, error }) => (
  <section id="MovieList">
    {movies && !loading && !error && (
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    )}
    {!loading && error && (
      <div>Error while fetching movies, please reload page</div>
    )}
    {loading && <div>Loading...</div>}
  </section>
)

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error,
})

export default connect(mapStateToProps)(movieList)
