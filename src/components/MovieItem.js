import React from 'react'
import { connect } from 'react-redux'
import { setSelectedMovie } from 'actions/movies'
import './MovieItem.scss'

const MovieItem = ({ movie, setSelectedMovie }) => {
  const onItemClick = () => setSelectedMovie(movie.id)

  return (
    // eslint-disable-next-line
    <li key={movie.id} onClick={onItemClick} className="MovieItem">
      <span className="MovieItem_episode">
        Episode {movie.fields.episode_id}
      </span>
      <span className="MovieItem_title">{movie.fields.title}</span>
      <span className="MovieItem_year">{movie.fields.release_date}</span>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  setSelectedMovie: movieId => dispatch(setSelectedMovie(movieId)),
})

export default connect(
  null,
  mapDispatchToProps
)(MovieItem)
