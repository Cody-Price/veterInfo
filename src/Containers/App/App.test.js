import App from './App'
import React from 'react'
import { shallow } from 'enzyme'
import { mapDispatchToProps } from './App'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
configure({ adapter: new Adapter() })

jest.mock('../../thunks/fetchRecentHeadlines')
jest.mock('../../thunks/fetchSources')

describe('App', () => {
  let wrapper
  let mockDispatch

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockDispatch = jest.fn()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    
    it('should call fetchRecentHeadlines', () => {
      const actionToDispatch = fetchRecentHeadlines()
			const result = mapDispatchToProps(mockDispatch)
      result.fetchRecentHeadlines()
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call fetchSources', () => {
      const actionToDispatch = fetchSources()
			const result = mapDispatchToProps(mockDispatch)
			result.fetchSources()
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})