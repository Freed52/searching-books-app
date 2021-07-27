import * as types from '../types'

export const setSelectorsDataAC = (payload) => (dispatch) => {
    dispatch({ type: types.INIT_SELECTORS, payload: payload })
}
