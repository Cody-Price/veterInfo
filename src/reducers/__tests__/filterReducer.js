import { filterReducer } from '../filterReducer'
import * as actions from '../../actions'

describe('filterReducer', () => {
	it('should return default state', () => {
		const expected = null
		const result = filterReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should be able to add a filter to the store', () => {
		const filter = {topic: 'education', branch: 'army'}
		const expected = filter
		const result = filterReducer(null, actions.addFilterToStore(filter))
		expect(result).toEqual(expected)
  })
  
  it('should be able to clear the filter from the store', () => {
		const filter = {topic: 'education', branch: 'army'}
    const expected = null
    const result = filterReducer(filter, actions.clearFilterFromStore())
    expect(result).toEqual(expected)
  })
})