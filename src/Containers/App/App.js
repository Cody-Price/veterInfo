import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import Filter from '../Filter/Filter.js'
import Header from '../Header/Header.js'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
import { connect } from 'react-redux'
import './App.scss'

class App extends Component {
  async componentDidMount() {
    await this.props.fetchRecentHeadlines()
    await this.props.fetchSources()
  }

  render() {
    return (
      <div className="App">
        <Filter />
        <Header />
        <ArticleContainer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRecentHeadlines: () => dispatch(fetchRecentHeadlines()),
  fetchSources: () => dispatch(fetchSources())
})

export default connect(null, mapDispatchToProps)(App)
