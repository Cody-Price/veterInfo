export const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ARTICLES_TO_STORE':
      return [...state, ...action.articles]
    case 'REMOVE_ARTICLES_FROM_STORE':
      return []
    default:
      return state
  }
}
