import { SET_CHOOSE_BOOK } from '../types'

const initChooseBookData = {
  book: {}
}

export const chooseBookReducer = (state = initChooseBookData, action) => {
  switch (action.type) {
    case SET_CHOOSE_BOOK:
      return {
        ...state,
        book: action.payload
      }
    default:
      return state
  }
}
