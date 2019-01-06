import apiKey from '../utilities/apiKey'
import { isLoading, hasErrored } from '../actions/index'
import { cleanArticles } from '../utilities/helper/helper'
import { addArticlesToStore } from '../actions/index'

const fetchRecentHeadlines = (page) => {
  const navPage = page || 1
  const url = `https://newsapi.org/v2/everything?q=+veterans AND military&page=${navPage}&apiKey=${apiKey}`
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

export default fetchRecentHeadlines