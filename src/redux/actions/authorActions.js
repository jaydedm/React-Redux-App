import * as types from './actionTypes'
import * as authorApi from '../../api/authorApi'
import { beginApiCall, apiCallError } from './apiStatusActions'

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

// thunk
export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall())
    return authorApi
      .getAuthors()
      .then(courses => {
        dispatch(loadAuthorsSuccess(courses))
      })
      .catch(error => {
        dispatch(apiCallError(error))
        throw error
      })
  }
}
