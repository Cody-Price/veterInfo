export const isLoading = (bool) => {
	return {
		type: 'IS_LOADING',
		isLoading: bool
	}
}

export const addArticlesToStore = (articles) => {
  return {
    type: 'ADD_ARTICLES_TO_STORE',
    articles
  }
}

export const addSourcesToStore = (sources) => {
  return {
    type: 'ADD_SOURCES_TO_STORE',
    sources
  }
}

export const removeArticlesFromStore = () => {
  return {
    type: 'REMOVE_ARTICLES_FROM_STORE'
  }
}

export const hasErrored = (error) => {
  return {
    type: 'HAS_ERRORED',
    error
  }
}

export const addFilterToStore = (filter) => {
  return {
    type: 'ADD_FILTER_TO_STORE',
    filter
  }
}

export const addFavoriteToStore = (favorite) => {
  return {
    type: 'ADD_FAVORITE_TO_STORE',
    favorite
  }
}

export const removeFavoriteFromStore = (favorite) => {
  return {
    type: 'REMOVE_FAVORITE_FROM_STORE',
    favorite
  }
}