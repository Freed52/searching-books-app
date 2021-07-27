import { INIT_SELECTORS } from '../types'

const initSelectorsData = {
  selectors: [
    {
      orderBy: 'categories',
      label: 'Categories',
      categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
      choosen: 'all'
    },
    {
      orderBy: 'sorting',
      label: 'Sorting by',
      categories: ['relevance', 'newest'],
      choosen: 'relevance'
    }
  ]
}

export const selectorsReducer = (state = initSelectorsData, action) => {
  switch (action.type) {
    case INIT_SELECTORS:
      return {
        ...state,
        selectors: state.selectors.map((f) => {
          f.categories.filter((category) => {
            if (category === action.payload) {
              f.choosen = category
            }
            return f
          })
          return f
        })
      }
    default:
      return state
  }
}
