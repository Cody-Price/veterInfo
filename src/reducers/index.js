import { combineReducers } from 'redux'
import { isLoading } from './isLoadingReducer'
import { articlesReducer } from './articlesReducer'

const rootReducer = combineReducers(
  {
    isLoading: isLoading,
    articles: articlesReducer
  }
)

export default rootReducer