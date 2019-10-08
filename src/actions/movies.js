import Axios from 'axios'
import { FETCH_MOVIES_URL } from 'appConfig'
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  SET_SORT_ORDER,
  SET_FILTER_VALUE,
  SET_SELECTED_MOVIE,
} from './types'

const fetchMoviesStart = () => ({
  type: FETCH_MOVIES_START,
})

const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
})

const fetchMoviesFail = error => ({
  type: FETCH_MOVIES_FAIL,
  error,
})

export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesStart())
    return Axios.get(FETCH_MOVIES_URL)
      .then(res => {
        dispatch(fetchMoviesSuccess(res.data))
      })
      .catch(err => dispatch(fetchMoviesFail(err)))
  }
}

export const sortMovies = sortOrder => ({
  type: SET_SORT_ORDER,
  sortOrder,
})

export const filterMovies = filterValue => ({
  type: SET_FILTER_VALUE,
  filterValue,
})

export const setSelectedMovie = movieId => ({
  type: SET_SELECTED_MOVIE,
  movieId,
})
