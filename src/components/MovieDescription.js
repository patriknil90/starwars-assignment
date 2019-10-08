import React from 'react'
import { connect } from 'react-redux'
import './MovieDescription.scss'

const MovieDescription = ({ selectedMovie }) => {
  return (
    <section id="MovieDescription">
      {!selectedMovie ? (
        <div id="MovieDescription_no-movie-selected">No movie selected</div>
      ) : (
        <div id="MovieDescription_selected-movie">
          <h1 id="MovieDescription_title">{selectedMovie.fields.title}</h1>
          <p id="MovieDescription_opening-crawl">
            {selectedMovie.fields.opening_crawl}
          </p>
          <p id="MovieDescription_director">
            Directed by: {selectedMovie.fields.director}
          </p>
        </div>
      )}
    </section>
  )
}

const mapStateToProps = state => {
  const { movies, selectedMovieId } = state.movies
  const movieIndex =
    selectedMovieId && movies.findIndex(movie => movie.id === selectedMovieId)
  return {
    selectedMovie: movieIndex > -1 ? movies[movieIndex] : null,
  }
}

export default connect(mapStateToProps)(MovieDescription)
