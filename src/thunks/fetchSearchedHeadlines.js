import apiKey from '../utilities/apiKey'
import { isLoading, hasErrored } from '../actions/index'
import { cleanArticles, cleanFilter, cleanSource, cleanFromDate, cleanToDate, cleanSearch } from '../utilities/helper'
import { addArticlesToStore } from '../actions/index'

const fetchSearchedHeadlines = (search, page, filter) => {
  const searchString = cleanSearch(search)
  const filterSearch = cleanFilter(filter)
  const source = cleanSource(filter)
  const dateFrom = cleanFromDate(filter) || ''
  const dateTo = cleanToDate(filter) || ''
  const navPage = page || 1
  const url = `https://newsapi.org/v2/everything?q=${searchString}+veterans AND ${filterSearch}military${source}${dateFrom}${dateTo}&page=${navPage}&apiKey=${apiKey}`
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const results = await response.json()
      const cleanedArticles = cleanArticles(results)
      dispatch(addArticlesToStore(cleanedArticles))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export default fetchSearchedHeadlines