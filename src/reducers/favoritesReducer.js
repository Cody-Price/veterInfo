export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE_TO_STORE':
      return [...state, action.favorite]
    case 'REMOVE_FAVORITE_FROM_STORE':
      return state.filter(article => {
        if (article.title !== action.favorite.title) {
          return article
        }
      })
    default:
      return state
  }
}