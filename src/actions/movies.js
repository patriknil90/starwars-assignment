import Axios from 'axios'
import { FETCH_MOVIES_URL } from 'appConfig'
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

const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesStart())
    return Axios.get(FETCH_MOVIES_URL)
      .then(res => {
        dispatch(fetchMoviesSuccess(res.data))
      })
      .catch(err => dispatch(fetchMoviesFail(err)))
  }
}

export default fetchMovies
