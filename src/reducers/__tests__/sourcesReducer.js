import { sourcesReducer } from '../sourcesReducer'
import * as actions from '../../actions'

describe('sourcesReducer', () => {
	it('should return default state', () => {
		const expected = []
		const result = sourcesReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should be able to add sources to the store', () => {
    const sources = [{source: 'ABC news', id: 'abc-news'}, {source: 'FOX news', id: 'fox-news'}]
    const expected = sources
		const result = sourcesReducer(undefined, actions.addSourcesToStore(sources))
		expect(result).toEqual(expected)
  })
})