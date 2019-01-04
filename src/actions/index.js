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