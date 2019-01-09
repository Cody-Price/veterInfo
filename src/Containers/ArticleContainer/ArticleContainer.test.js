import ArticleContainer from './ArticleContainer'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mapStateToProps } from './ArticleContainer'
configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ArticleContainer />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a state object', () => {
      const mockState = {
        articles: [{name: 'news network 1'}, {name: 'news network 2'}],
        isLoading: false,
        favorites: [{name: 'news is good'}, {name: 'news is great'}],
        bogusProperty: true
      }
      const expected = {
        articles: [{name: 'news network 1'}, {name: 'news network 2'}],
        isLoading: false,
        favorites: [{name: 'news is good'}, {name: 'news is great'}]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})