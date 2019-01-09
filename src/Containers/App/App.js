import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import Filter from '../Filter/Filter.js'
import Header from '../Header/Header.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSources from '../../thunks/fetchSources'
import { connect } from 'react-redux'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import PropTypes from 'prop-types'
import './App.scss'

class App extends Component {
  componentDidMount() {
    this.props.fetchRecentHeadlines()
    this.props.fetchSources()
  }

  render() {
    return (
      <div className="App">
        <Filter />
        <Header />
        <Switch>
          <Route exact path='/' component={ ArticleContainer } />
          <Route path='/saved' component={ ArticleContainer } />
          <Route component={ ErrorPage } />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  fetchRecentHeadlines: PropTypes.func.isRequired,
  fetchSources: PropTypes.func.isRequired
}

export const mapDispatchToProps = (dispatch) => ({
  fetchRecentHeadlines: () => dispatch(fetchRecentHeadlines()),
  fetchSources: () => dispatch(fetchSources())
})

export default withRouter(connect(null, mapDispatchToProps)(App))
