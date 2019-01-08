import { combineReducers } from 'redux'
import { isLoadingReducer } from './isLoadingReducer'
import { articlesReducer } from './articlesReducer'
import { sourcesReducer } from './sourcesReducer'
import { errorReducer } from './errorReducer'
import { filterReducer } from './filterReducer'
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers(
  {
    isLoading: isLoadingReducer,
    articles: articlesReducer,
    sources: sourcesReducer,
    error: errorReducer,
    filter: filterReducer,
    favorites: favoritesReducer
  }
)

export default rootReducer