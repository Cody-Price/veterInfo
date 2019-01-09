import { isLoadingReducer } from '../isLoadingReducer'
import * as actions from '../../actions'

describe('isLoadingReducer', () => {
	it('should return default state', () => {
		const expected = false
		const result = isLoadingReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should be able to return true if directed', () => {
		const expected = true
		const result = isLoadingReducer(undefined, actions.isLoading(true))
		expect(result).toEqual(expected)
  })
})