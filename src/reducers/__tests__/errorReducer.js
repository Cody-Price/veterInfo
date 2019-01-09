import { errorReducer } from '../errorReducer'
import * as actions from '../../actions'

describe('errorReducer', () => {
	it('should return default state', () => {
		const expected = ''
		const result = errorReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should return the state with a new error', () => {
		const message = 'errors are bad'
		const expected = message
		const result = errorReducer('', actions.hasErrored(message))
		expect(result).toEqual(expected)
	})
})