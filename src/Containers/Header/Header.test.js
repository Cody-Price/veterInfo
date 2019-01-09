import Header from './Header'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
import { mapStateToProps, mapDispatchToProps } from './Header'
import { removeArticlesFromStore } from '../../actions/index'
configure({ adapter: new Adapter() }) 

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe.skip('handleSubmit', () => {
    const preventDefault = jest.fn()
    const mockEvent = {preventDefault}

    wrapper.instance().handleSubmit(mockEvent)

  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockState = {
        filter: {branch: 'army'},
        bogusProperty: true
      }
      const expected = {
        filter: {branch: 'army'}
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchSearchedHeadlines thunk', () => {
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

    it('calls dispatch with a fetchRecentHeadlines thunk', () => {
      const mockDispatch = jest.fn()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchRecentHeadlines()

      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})