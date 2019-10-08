import React from 'react'
import { connect } from 'react-redux'
import MovieItem from 'components/MovieItem'
import { SORT_VALUES } from 'utils/constants'

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

const getVisibleMovies = (sortOrder, filterValue, movies) => {
  let visibleMovies = [...movies]

  if (sortOrder)
    visibleMovies = visibleMovies.sort((movie1, movie2) => {
      const movie1Val = movie1.fields[sortOrder]
      const movie2Val = movie2.fields[sortOrder]
      if (sortOrder !== SORT_VALUES.RELEASE_DATE) return movie1Val - movie2Val
      return new Date(movie1Val).getTime() - new Date(movie2Val).getTime()
    })

  if (filterValue.trim().length === 0) return visibleMovies
  return visibleMovies.filter(movie =>
    movie.fields.title.toLowerCase().includes(filterValue.toLowerCase())
  )
}

const mapStateToProps = state => {
  const { movies, loading, error, sortOrder, filterValue } = state.movies
  return {
    movies: getVisibleMovies(sortOrder, filterValue, movies),
    loading,
    error,
  }
}

export default connect(mapStateToProps)(movieList)
