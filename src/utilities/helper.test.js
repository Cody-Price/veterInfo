import { cleanArticles, cleanDate, cleanFilter, addAND, cleanSource, cleanFromDate, cleanToDate, cleanSearch } from './helper'


describe('helper functions', () => {
  
  describe('cleanArticles', () => {
    let dirtyArticles

    beforeEach(() => {
        dirtyArticles = {articles: [
          {
            title: 'news is good',
            author: 'cody price',
            content: 'news is a great thing',
            description: 'look at all the cool news',
            date: undefined,
            source: {
              name: 'ABC news'
            },
            url: 'www.url.com',
            urlToImage: 'www.imagepath.com',
            favorite: false,
            bogusProperty: true
          },
          {
            title: 'news is great',
            author: 'jacob lowery',
            content: 'news is a fantastic thing',
            description: 'look at all the great news',
            date: undefined,
            source: {
              name: 'FOX news'
            },
            url: 'www.url2.com',
            urlToImage: 'www.imagepath2.com',
            favorite: false,
            bogusProperty: true
          }
        ]
      }
    })

    it.skip('should call cleanDate', () => {
      cleanArticles(dirtyArticles)
      const cleanDate = jest.fn().mockImplementation(() => null)
      expect(cleanDate).toHaveBeenCalledWith(dirtyArticles)
    })

    it('should return clean articles if given dirty articles', () => {
      const expected = [
        {
          title: 'news is good',
          author: 'cody price',
          content: 'news is a great thing',
          description: 'look at all the cool news',
          date: null,
          source: 'ABC news',
          url: 'www.url.com',
          imagePath: 'www.imagepath.com',
          favorite: false
        },
        {
          title: 'news is great',
          author: 'jacob lowery',
          content: 'news is a fantastic thing',
          description: 'look at all the great news',
          date: null,
          source: 'FOX news',
          url: 'www.url2.com',
          imagePath: 'www.imagepath2.com',
          favorite: false
        }
      ]
      const result = cleanArticles(dirtyArticles)
      expect(result).toEqual(expected)
    })
  })

  describe('cleanDate', () => {

    it('should be able to return a clean date', () => {
      const mockDate = '2018-12-10T23:32:21Z'
      const expected = '2018-12-10  23:32:21'
      const result = cleanDate(mockDate)
      expect(result).toEqual(expected)
    })

    it('should return null if not given a date', () => {
      const expected = null
      const result = cleanDate(undefined)
      expect(result).toEqual(expected)
    })
  })

  describe('cleanFilter', () => {

    it('should return an empty string if given no data', () => {
      const expected = ''
      const result = cleanFilter()
      expect(result).toEqual(expected)
    })

    it('should return a topic with AND at the end if a topic is selected', () => {
      const mockFilter = {topicSelect: 'education'}
      const expected = 'education AND '
      const result = cleanFilter(mockFilter)
      expect(result).toEqual(expected)
    })

    it('should return a branch with AND at the end if a branch is selected', () => {
      const mockFilter = {branchSelect: 'army'}
      const expected = 'army AND '
      const result = cleanFilter(mockFilter)
      expect(result).toEqual(expected)
    })
  })

  describe('addAND', () => {
    
    it('should return an empty string if given an empty string', () => {
      const expected = ''
      const result = addAND('')
      expect(result).toEqual(expected)
    })

    it('should add an AND to the end of a string in place of a space if given one', () => {
      const mockString = 'testing '
      const expected = 'testing AND '
      const result = addAND(mockString)
      expect(result).toEqual(expected)
    })
  })

  describe('cleanSource', () => {

    it('should return an empty string if given no data', () => {
      const expected = ''
      const result = cleanSource()
      expect(result).toEqual(expected)
    })

    it('should return a proper SQL sources query if given a filter with a source selected', () => {
      const mockFilter = {sourceSelect: 'abc-news'}
      const expected = '&sources=abc-news'
      const result = cleanSource(mockFilter)
      expect(result).toEqual(expected)
    })
  })

  describe('cleanFromDate', () => {

    it('should return an empty string if given no data', () => {
      const expected = ''
      const result = cleanFromDate()
      expect(result).toEqual(expected)
    })

    it('should return a proper SQL date from query if given a filter with a from date selected', () => {
      const mockFilter = {dateFromSelect: '2019-01-01'}
      const expected = '&from=2019-01-01'
      const result = cleanFromDate(mockFilter)
      expect(result).toEqual(expected)
    })
  })

  describe('cleanToDate', () => {

    it('should return an empty string if given no data', () => {
      const expected = ''
      const result = cleanToDate()
      expect(result).toEqual(expected)
    })

    it('should return a proper SQL date from query if given a filter with a to date selected', () => {
      const mockFilter = {dateToSelect: '2019-01-01'}
      const expected = '&to=2019-01-01'
      const result = cleanToDate(mockFilter)
      expect(result).toEqual(expected)
    })
  })

  describe('cleanSearch', () => {

    it('should return an empty string if given no data', () => {
      const expected = ''
      const result = cleanSearch()
      expect(result).toEqual(expected)
    })

    it('should return a proper SQL search addition if given a search string regardless of case', () => {
      const mockSearch = 'ObAmA tRuMp'
      const expected = '+"obama%20trump" AND '
      const result = cleanSearch(mockSearch)
      expect(result).toEqual(expected)
    })
  })
})