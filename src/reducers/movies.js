import movies from 'movieMocks'
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
} from 'actions/types'

const initialState = {
  movies,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, loading: true, error: null }
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.movies, loading: false, error: null }
    case FETCH_MOVIES_FAIL:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
