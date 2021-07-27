import * as types from '../types'
import { requests } from '../api'

export const getBooksAC = (keywords, category, filter, startIndex) => async (dispatch) => {
    const response = await requests.getBooks(keywords, category, filter, startIndex)
    if (response.status === 200) {
        return dispatch({ type: types.SET_BOOKS, payload: response.data, keywords: keywords, category: category, filter: filter })
    }
}
