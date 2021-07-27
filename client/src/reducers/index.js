import { combineReducers } from 'redux'
import { selectorsReducer } from './selectorsReducer'
import { booksReducer } from './booksReducer'
import { chooseBookReducer } from './chooseBookReducer'

export default combineReducers({
    selectors: selectorsReducer,
    books: booksReducer,
    chooseBook: chooseBookReducer
  })
