import Article from './Article'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
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
})