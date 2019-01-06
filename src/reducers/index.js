import { combineReducers } from 'redux'
import { isLoading } from './isLoadingReducer'
import { articlesReducer } from './articlesReducer'
import { sourcesReducer } from './sourcesReducer'

const rootReducer = combineReducers(
  {
    isLoading: isLoading,
    articles: articlesReducer,
    sources: sourcesReducer
  }
)

export default rootReducer