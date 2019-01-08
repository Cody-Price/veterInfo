import * as actions from './index'

describe('actions', () => {
  it('should have a type of IS_LOADING with a boolean', () => {
		const bool = false
		const expected = {
			type: 'IS_LOADING',
			isLoading: bool
		}

		const result = actions.isLoading(bool)
		expect(result).toEqual(expected)
  })
  
  it('should have a type of ADD_ARTICLES_TO_STORE with an articles array', () => {
    const articles = [{title: 'testing is fun', content: 'is what im told'},
      {title: 'testing is still fun', content: 'drink the koolaid'}]
		const expected = {
			type: 'ADD_ARTICLES_TO_STORE',
			articles
		}

		const result = actions.addArticlesToStore(articles)
		expect(result).toEqual(expected)
  })
  
  it('should have a type of ADD_SOURCES_TO_STORE with a sources array', () => {
    const sources = [{name: "ABC News", id: "abc-news"},
      {name: "ABC News (AU)", id: "abc-news-au"}]
		const expected = {
			type: 'ADD_SOURCES_TO_STORE',
			sources
		}

		const result = actions.addSourcesToStore(sources)
		expect(result).toEqual(expected)
  })
  
  it('should have a type of REMOVE_ARTICLES_FROM_STORE that clears articles from store', () => {
		const expected = {
			type: 'REMOVE_ARTICLES_FROM_STORE'
		}

		const result = actions.removeArticlesFromStore()
		expect(result).toEqual(expected)
  })
  
  it('should have a type of HAS_ERRORED with an error message ', () => {
		const error = 'error retrieving info'
		const expected = {
			type: 'HAS_ERRORED',
			error
		}

		const result = actions.hasErrored(error)
		expect(result).toEqual(expected)
  })
  
  it('should have a type of ADD_FILTER_TO_STORE with a filter object', () => {
    const filter = {topicSelect: "education", branchSelect: "army"}
    const expected = {
      type: 'ADD_FILTER_TO_STORE',
      filter
    }

    const result = actions.addFilterToStore(filter)
    expect(result).toEqual(expected)
  })

  it('should have a type of CLEAR_FILTER_FROM_STORE', () => {
    const expected = {
			type: 'CLEAR_FILTER_FROM_STORE'
		}

		const result = actions.clearFilterFromStore()
		expect(result).toEqual(expected)
  })

  it('should have a type of ADD_FAVORITE_TO_STORE with a favorite object', () => {
    const favorite = {title: 'testing is fun', content: 'is what im told'}
    const expected = {
      type: 'ADD_FAVORITE_TO_STORE',
      favorite
    }

    const result = actions.addFavoriteToStore(favorite)
    expect(result).toEqual(expected)
  })

  it('should have a type of REMOVE_FAVORITE_FROM_STORE with a favorite object', () => {
    const favorite = {title: 'testing is fun', content: 'is what im told'}
    const expected = {
      type: 'REMOVE_FAVORITE_FROM_STORE',
      favorite
    }

    const result = actions.removeFavoriteFromStore(favorite)
    expect(result).toEqual(expected)
  })
})