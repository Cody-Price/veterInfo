import { favoritesReducer } from '../favoritesReducer'
import * as actions from '../../actions'

describe('favoritesReducer', () => {
	it('should return default state', () => {
		const expected = []
		const result = favoritesReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should be able to add a favorites to the store', () => {
		const favorite = {title: 'news is good'}
		const expected = [favorite]
		const result = favoritesReducer(undefined, actions.addFavoriteToStore(favorite))
		expect(result).toEqual(expected)
  })
  
  it('should be able to remove a favorite from the store', () => {
    const favorites = [{title: 'news is good', id: 1}, {title: 'dont call it fake news', id: 2}]
    const favoriteToBeRemoved = {title: 'dont call it fake news', id: 2}
    const expected = [{title: 'news is good', id: 1}]
    const result = favoritesReducer(favorites, actions.removeFavoriteFromStore(favoriteToBeRemoved))
    expect(result).toEqual(expected)
  })
})