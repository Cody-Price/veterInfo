import React from 'react'
import './ArticleContainer.scss'
import { connect } from 'react-redux'
import Article from '../Article/Article'

const ArticleContainer = (props) => {
  const displayedArticles = props.articles.map(article => {
    return <Article article={article} key={article.title} />
  })

  if (props.isLoading) {
    return (
      <div className="article-container no-results-message">
        Loading...
      </div>
    )
  } else if (displayedArticles.length === 0 && !props.isLoading) {
    return (
      <div className="article-container no-results-message">
        Sorry, based on your request there are no articles to display.
      </div>
    )
  } else {
    return (
      <div className="article-container">
        { displayedArticles }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(ArticleContainer)