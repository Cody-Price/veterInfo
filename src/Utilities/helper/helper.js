export const cleanArticles = (dirtyArticles) => {
  return dirtyArticles.articles.map(article => {
    return {
      title: article.title,
      author: article.author,
      content: article.content,
      description: article.description,
      date: cleanDate(article.publishedAt),
      source: article.source.name,
      url: article.url,
      imagePath: article.urlToImage
    }
  })
}

const cleanDate = (date) => {
  let newDate = date.replace('T', '  ')
  let newNewDate = newDate.replace('Z', ' ')
  return newNewDate || null
}

//2018-12-06T20:13:00Z