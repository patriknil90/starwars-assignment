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

const getSortedMovies = (sortOrder, movies) => {
  if (!sortOrder) return movies

  return [...movies].sort(
    (movie1, movie2) => movie1.fields[sortOrder] - movie2.fields[sortOrder]
  )
}

const mapStateToProps = state => {
  const { movies, loading, error, sortOrder } = state.movies
  return {
    movies: getSortedMovies(sortOrder, movies),
    loading,
    error,
  }
}

export default connect(mapStateToProps)(movieList)
