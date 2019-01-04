export const cleanArticles = (dirtyArticles) => {
  return dirtyArticles.articles.map(article => {
    return {
      title: article.title,
      author: article.author,
      content: article.content,
      description: article.description,
      date: article.publishedAt,
      source: article.source.name,
      url: article.url,
      imagePath: article.urlToImage
    }
  })
}