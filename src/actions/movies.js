import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
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
