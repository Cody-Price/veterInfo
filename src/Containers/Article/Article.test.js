import Article from './Article'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
import { mapStateToProps, mapDispatchToProps } from './Article'
import { addFavoriteToStore, removeFavoriteFromStore } from '../../actions/index'
configure({ adapter: new Adapter() })

describe('Article', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Article />)
  }) 

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call saveArticle when the save button is clicked', () => {
    const spy = jest.spyOn(wrapper, 'saveArticle')
		wrapper.find('button').at(1).simulate('click')
		expect(spy).toHaveBeenCalled()
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockState = {
        favorites: [{name: 'news is good'}, {name: 'news is great'}],
        bogusProperty: true
      }
      const expected = {
        favorites: [{name: 'news is good'}, {name: 'news is great'}]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addFavoriteToStore action when saveArticle is called', () => {
      const mockFavorite = {name: 'news is good'}
      const mockDispatch = jest.fn()
      const actionToDispatch = addFavoriteToStore(mockFavorite)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addFavoriteToStore(mockFavorite)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with a removeFavoriteFromStore action when saveArticle is called', () => {
      const mockFavorite = {name: 'news is good'}
      const mockDispatch = jest.fn()
      const actionToDispatch = removeFavoriteFromStore(mockFavorite)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeFavoriteFromStore(mockFavorite)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})