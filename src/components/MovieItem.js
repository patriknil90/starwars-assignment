import React from 'react'

const MovieItem = ({ movie }) => {
  return (
    <li key={movie.id} className="MovieItem">
      <span className="MovieItem_episode">
        Episode {movie.fields.episode_id}
      </span>
      <span className="MovieItem_title">{movie.fields.title}</span>
      <span className="MovieItem_year">{movie.fields.release_date}</span>
    </li>
  )
}

export default MovieItem
