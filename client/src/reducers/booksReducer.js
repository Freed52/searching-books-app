import { CLEAR_BOOKS_LIST, SET_BOOKS } from '../types'

const initBooksData = {
  books: [],
  totalItems: 0,
  totalPages: 0,
  keywords: '',
  category: '',
  filter: ''
}

export const booksReducer = (state = initBooksData, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: !state.books.length ? 
        state.books.concat(action.payload.items) : 
        state.books.concat(action.payload.items.filter((book, index) => state.books[index].id === book.id ? false : true)),
        totalItems: action.payload.totalItems,
        totalPages: Math.ceil(action.payload.totalItems / 30),
        keywords: action.keywords,
        category: action.category,
        filter: action.filter
      }
    case CLEAR_BOOKS_LIST:
      return {
        ...state,
        books: [],
        keywords: action.payload,
        category: '',
        filter: ''
      }
    default:
      return state
  }
}
