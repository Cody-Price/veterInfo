import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import { connect } from 'react-redux'
import './App.scss'

class App extends Component {
  async componentDidMount() {
    await this.props.fetchRecentHeadlines()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Search />
        <ArticleContainer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRecentHeadlines: () => dispatch(fetchRecentHeadlines())
})

export default connect(null, mapDispatchToProps)(App)
