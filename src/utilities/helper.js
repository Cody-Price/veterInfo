export const cleanArticles = (dirtyArticles) => {
  return dirtyArticles.articles.map(article => {
    const date = cleanDate(article.publishedAt)
    return {
      title: article.title,
      author: article.author,
      content: article.content,
      description: article.description,
      date: date,
      source: article.source.name,
      url: article.url,
      imagePath: article.urlToImage,
      favorite: false
    }
  })
}

export const cleanDate = (date) => {
  if (date) {
    let newDate = date.replace('T', '  ')
    let newNewDate = newDate.replace('Z', '')
    return newNewDate
  } else {
    return null
  }
}

export const cleanFilter = (filter) => {
  let filterString = ''
  if (!filter) {
    return ''
  } else {
    if (filter.topicSelect) {
      filterString += `${filter.topicSelect} `
    }
    if (filter.branchSelect) {
      filterString += `${filter.branchSelect} `
    }
    const cleanString = addAND(filterString)
    return cleanString
  }
}

export const addAND = (string) => {
  let stringArray = []
  const splitString = string.split('')
  splitString.forEach(character => {
    if (character !== ' ') {
      stringArray.push(character)
    } else if (character === ' ') {
      stringArray.push(' AND ')
    }
  })
  return stringArray.join('')
}

export const cleanSource = (filter) => {
  if (filter) {
    return `&sources=${filter.sourceSelect}`
  } else {
    return ''
  }
}

export const cleanFromDate = (filter) => {
  if (filter) {
    if (filter.dateFromSelect) {
      return `&from=${filter.dateFromSelect}`
    }
  } else {
    return ''
  }
}

export const cleanToDate = (filter) => {
  if (filter) {
    if (filter.dateToSelect) {
      return `&to=${filter.dateToSelect}`
    }
  } else {
    return ''
  }
}

export const cleanSearch = (search) => {
  if (!search) {
    return ''
  } else {
    const lowerSearch = search.toLowerCase()
    return `+"${lowerSearch.replace(' ', '%20')}" AND `
  }
}