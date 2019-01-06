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