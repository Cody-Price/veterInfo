import apiKey from '../utilities/apiKey'
import { isLoading } from '../actions/index'
import { addSourcesToStore } from '../actions/index'

const fetchSources = () => {
  const url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const results = await response.json()
      const sources = results.sources.map(source => {
        return {
          name: source.name,
          id: source.id
        }
      })
      dispatch(addSourcesToStore(sources))
    } catch(error) {
      console.log(error.message)
    }
  }
}

export default fetchSources