import App from './App'
import React from 'react'
import { shallow } from 'enzyme'
import { mapDispatchToProps } from './App'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
configure({ adapter: new Adapter() })

describe.skip('App', () => {
  let wrapper
  let mockDispatch

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockDispatch = jest.fn()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchRecentHeadlines thunk when componentDidMount is called', () => {
      const mockDispatch = jest.fn()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchRecentHeadlines()

      expect(mockDispatch).toHaveBeenCalled()
    })

    it('calls dispatch with a fetchSources thunk when componentDidMount is called', () => {
      const mockDispatch = jest.fn()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchSources()

      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})