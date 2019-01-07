import { combineReducers } from 'redux'
import { isLoading } from './isLoadingReducer'
import { articlesReducer } from './articlesReducer'
import { sourcesReducer } from './sourcesReducer'
import { errorReducer } from './errorReducer'
import { filterReducer } from './filterReducer'
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers(
  {
    isLoading: isLoading,
    articles: articlesReducer,
    sources: sourcesReducer,
    error: errorReducer,
    filter: filterReducer,
    favorites: favoritesReducer
  }
)

export default rootReducer