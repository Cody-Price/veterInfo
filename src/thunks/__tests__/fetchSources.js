import fetchSources from '../fetchSources.js'
import { isLoading, hasErrored, addSourcesToStore } from '../../actions'
import * as helper from '../../utilities/helper'

describe('fetchSources', () => {
  let mockDispatch
  
  beforeEach(() => {
    mockDispatch = jest.fn()
  })
  
  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchSources()
    thunk(mockDispatch)
  
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
  
    const thunk = fetchSources()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = fetchSources()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch addSourcesToStore if response is ok', async () => {
    const mockSources = [{name: 'ABC news', id: 'abc-news'}, {name: 'FOX news', id: 'fox-news'}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        sources: mockSources
      })
    }))
    const thunk = fetchSources()
    
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(addSourcesToStore(mockSources))
  })
})