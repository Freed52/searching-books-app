import * as types from '../types'

export const clearBooksListAC = (value) => (dispatch) => {
    dispatch({ type: types.CLEAR_BOOKS_LIST, payload: value })
}