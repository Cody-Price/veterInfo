export const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ARTICLES_TO_STORE':
      return [...state, ...action.articles]
    default:
      return state
  }
}
