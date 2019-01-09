import Filter from './Filter'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Filter />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})