import Filter from './Filter'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
import { mapStateToProps, mapDispatchToProps } from './Filter'
import { removeArticlesFromStore, addFilterToStore, addArticlesToStore } from '../../actions/index'
configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Filter />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockState = {
        sources: [{name: 'ABC news'}, {name: 'FOX news'}],
        favorites: [{name: 'news is good'}, {name: 'news is great'}],
        bogusProperty: true
      }
      const expected = {
        sources: [{name: 'ABC news'}, {name: 'FOX news'}],
        favorites: [{name: 'news is good'}, {name: 'news is great'}]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchSearchedHeadlines thunk when applyFilters is called', () => {
      const mockDispatch = jest.fn()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchSearchedHeadlines()

      expect(mockDispatch).toHaveBeenCalled()
    })

    it('calls dispatch with a removeArticlesFromStore action', () => {
      const mockArticles = [{name: 'news is good'}, {name: 'news is great'}]
      const mockDispatch = jest.fn()
      const actionToDispatch = removeArticlesFromStore(mockArticles)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeArticlesFromStore(mockArticles)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with an addFilterToStore action', () => {
      const mockFilter = {branch: 'army'}
      const mockDispatch = jest.fn()
      const actionToDispatch = addFilterToStore(mockFilter)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addFilterToStore(mockFilter)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with an addArticlesToStore action', () => {
      const mockArticles = [{name: 'news is good'}, {name: 'news is great'}]
      const mockDispatch = jest.fn()
      const actionToDispatch = addArticlesToStore(mockArticles)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addArticlesToStore(mockArticles)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})