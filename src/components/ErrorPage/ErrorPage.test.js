import ErrorPage from './ErrorPage'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ErrorPage', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<ErrorPage />)
    expect(wrapper).toMatchSnapshot()
  })
})