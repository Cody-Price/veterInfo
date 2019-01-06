import { combineReducers } from 'redux'
import { isLoading } from './isLoadingReducer'
import { articlesReducer } from './articlesReducer'
import { sourcesReducer } from './sourcesReducer'
import { errorReducer } from './errorReducer'

const rootReducer = combineReducers(
  {
    isLoading: isLoading,
    articles: articlesReducer,
    sources: sourcesReducer,
    error: errorReducer
  }
)

export default rootReducer