import React from 'react'
import './ArticleContainer.scss'
import { connect } from 'react-redux'
import Article from '../../components/Article/Article'

const ArticleContainer = (props) => {
  const displayedArticles = props.articles.map(article => {
    return <Article article={article} key={article.title} />
  })
  return (
    <div className="article-container">
      { displayedArticles }
      <button>Next Page</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

export default connect(mapStateToProps)(ArticleContainer)