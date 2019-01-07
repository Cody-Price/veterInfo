import apiKey from '../utilities/apiKey'
import { isLoading, hasErrored } from '../actions/index'
import { cleanArticles } from '../utilities/helper/helper'
import { addArticlesToStore } from '../actions/index'

const fetchSearchedHeadlines = (search, page, filter) => {
  console.log('filter:', filter)
  const searchString = cleanSearch(search)
  const filterSearch = cleanFilter(filter)
  const source = cleanSource(filter)
  const dateFrom = cleanFromDate(filter) || ''
  const dateTo = cleanToDate(filter) || ''
  const navPage = page || 1
  const url = `https://newsapi.org/v2/everything?q=${searchString}+veterans AND ${filterSearch}military${source}${dateFrom}${dateTo}&page=${navPage}&apiKey=${apiKey}`
  console.log(url)
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

const cleanFilter = (filter) => {
  let filterString = ''
  if (!filter) {
    return ''
  } else {
    if (filter.topicSelect) {
      filterString += `${filter.topicSelect} `
    }
    if (filter.branchSelect) {
      filterString += `${filter.branchSelect} `
    }
    const cleanString = addAND(filterString)
    return cleanString
  }
}

const addAND = (string) => {
  let stringArray = []
  const splitString = string.split('')
  splitString.forEach(character => {
    if (character !== ' ') {
      stringArray.push(character)
    } else if (character === ' ') {
      stringArray.push(' AND ')
    }
  })
  if (string === undefined) {
    return ''
  } else {
    return stringArray.join('')
  }
}

const cleanSource = (filter) => {
  if (filter) {
    return `&sources=${filter.sourceSelect}`
  } else {
    return ''
  }
}

const cleanFromDate = (filter) => {
  if (filter) {
    if (filter.dateFromSelect) {
      return `&from=${filter.dateFromSelect}`
    }
  } else {
    return ''
  }
}

const cleanToDate = (filter) => {
  if (filter) {
    if (filter.dateToSelect) {
      return `&to=${filter.dateToSelect}`
    }
  } else {
    return ''
  }
}

const cleanSearch = (search) => {
  if (!search) {
    return ''
  } else {
    return `+"${search.replace(' ', '%20')}" AND`
  }
}

export default fetchSearchedHeadlines