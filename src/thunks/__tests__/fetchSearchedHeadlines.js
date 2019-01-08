import fetchSearchedHeadlines from '../fetchSearchedHeadlines.js'
import { isLoading, hasErrored, addArticlesToStore } from '../../actions'
import * as helper from '../../utilities/helper'

describe('fetchSearchedHeadlines', () => {
  let mockDispatch
  
  beforeEach(() => {
    mockDispatch = jest.fn()
  })
  
  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchSearchedHeadlines()
    thunk(mockDispatch)
  
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
  
    const thunk = fetchSearchedHeadlines()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = fetchSearchedHeadlines()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch cleanArticles if response is ok', async () => {
    const mockArticle = {title: 'news is good'}
    helper.cleanArticles = jest.fn().mockImplementation(() => mockArticle)

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        result: mockArticle
      })
    }))
    const thunk = fetchSearchedHeadlines()
    
    await thunk(mockDispatch)

    expect(helper.cleanArticles).toHaveBeenCalled()
  })

  it('should dispatch addArticlesToStore if response is ok', async () => {
    const mockArticle = {title: 'news is good'}
    helper.cleanArticles = jest.fn().mockImplementation(() => mockArticle)

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        result: mockArticle
      })
    }))
    const thunk = fetchSearchedHeadlines()
    
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(addArticlesToStore(mockArticle))
  })
})