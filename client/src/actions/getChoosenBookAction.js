import * as types from '../types'
import { requests } from '../api'

export const getChoosenBookAC = (id) => async (dispatch) => {
    const response = await requests.getChoosenBook(id)
    if (response.status === 200) {
        return dispatch({ type: types.SET_CHOOSE_BOOK, payload: response.data })
    }
}
