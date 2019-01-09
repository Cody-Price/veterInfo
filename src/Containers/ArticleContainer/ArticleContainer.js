import React from 'react'
import './ArticleContainer.scss'
import { connect } from 'react-redux'
import Article from '../Article/Article'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import PropTypes from 'prop-types'

const ArticleContainer = (props) => {
  let articlesForIteration
	if (props.match.path === '/saved') {
    articlesForIteration = props.favorites
	} else {
    articlesForIteration = props.articles
  }
  
  const displayedArticles = articlesForIteration.map(article => {
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

ArticleContainer.propTypes = {
  articles: PropTypes.array,
  isLoading: PropTypes.bool,
  favorites: PropTypes.array,
  fetchRecentHeadlines: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  isLoading: state.isLoading,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  fetchRecentHeadlines: () => dispatch(fetchRecentHeadlines())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)