import { articlesReducer } from '../articlesReducer'
import * as actions from '../../actions'

describe('articlesReducer', () => {
	it('should return default state', () => {
		const expected = []
		const result = articlesReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should return the state with a new article', () => {
		const article = [{title: 'news is good'}]
		const expected = article
		const result = articlesReducer([], actions.addArticlesToStore(article))
		expect(result).toEqual(expected)
	})

	it('should be able to remove articles from store', () => {
    const initial = [{title: 'news is good'}, {title: 'dont call it fake news'}]
    const expected = []
    const result = articlesReducer(initial, actions.removeArticlesFromStore())
		expect(result).toEqual(expected)
	})
})