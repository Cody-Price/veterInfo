import apiKey from '../utilities/apiKey'
import { isLoading } from '../actions/index'
import { cleanArticles } from '../utilities/helper/helper'
import { addArticlesToStore } from '../actions/index'

const fetchSearchedHeadlines = (search, page) => {
  const navPage = page || 1
  const url = `https://newsapi.org/v2/everything?q=+veterans AND military AND +${search}&page=${navPage}&apiKey=${apiKey}`
  console.log(url);
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
      console.log(error.message)
    }
  }
}

export default fetchSearchedHeadlines