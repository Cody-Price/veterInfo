import React, { Component } from 'react'
import './Header.scss'
import flag from '../../assets/flag-gif.gif'
import { connect } from 'react-redux'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSearchedHeadlines from '../../thunks/fetchSearchedHeadlines'
import { removeArticlesFromStore } from '../../actions/index'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      pageNumber: 1
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.removeArticlesFromStore()
    this.props.fetchSearchedHeadlines(this.state.search, this.state.pageNumber)
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({[name]: value})
  }

  incrementPage = async () => {
    this.props.removeArticlesFromStore()
    let newPage = this.state.pageNumber + 1
    await this.setState({pageNumber: newPage})
    if (this.state.search || this.props.filter) {
      this.props.fetchSearchedHeadlines(this.state.search, this.state.pageNumber, this.props.filter)
    } else {
      this.props.fetchRecentHeadlines(this.state.pageNumber)
    }
  }

  decrementPage = async () => {
    if (this.state.pageNumber > 1) {
      this.props.removeArticlesFromStore()
      let newPage = this.state.pageNumber - 1
      await this.setState({pageNumber: newPage})
      this.props.fetchRecentHeadlines(this.state.pageNumber)
    }
  }

  navToHome = () => {
    this.props.removeArticlesFromStore()
    this.props.fetchRecentHeadlines()
  }

  render() {
    const greyBackground = 'grey nav-btn nav-left'
    const whiteBackground = 'nav-btn nav-left'
    return (
      <header className="header">
        <button className={this.state.pageNumber === 1 ? greyBackground : whiteBackground} onClick={this.decrementPage}>PREVIOUS</button>
        <div className="logo-search">
          <NavLink to="/"><h1 onClick={this.navToHome}><span className="red">Veter</span>Informant</h1></NavLink>
          <div className="search-div">
            <form onSubmit={this.handleSubmit} className="search-form">
              <input
                type="text"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
                className="search-input"
              />
              <button>Search</button>
            </form>
          </div>
        </div>
        <button className="nav-btn nav-right" onClick={this.incrementPage}>NEXT</button>
      </header>
    )
  }
}

Header.propTypes = {
  filter: PropTypes.object,
  fetchRecentHeadlines: PropTypes.func,
  removeArticlesFromStore: PropTypes.func,
  fetchSearchedHeadlines: PropTypes.func
}

export const mapStateToProps = (state) => ({
  filter: state.filter
})

export const mapDispatchToProps = (dispatch) => ({
  fetchRecentHeadlines: (page) => dispatch(fetchRecentHeadlines(page)),
  removeArticlesFromStore: () => dispatch(removeArticlesFromStore()),
  fetchSearchedHeadlines: (search, page, filter) => dispatch(fetchSearchedHeadlines(search, page, filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
