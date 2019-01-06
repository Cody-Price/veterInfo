import React, { Component } from 'react'
import './Header.scss'
import flag from '../../assets/flag-gif.gif'
import { connect } from 'react-redux'
import fetchRecentHeadlines from '../../thunks/fetchRecentHeadlines'
import fetchSearchedHeadlines from '../../thunks/fetchSearchedHeadlines'
import { removeArticlesFromStore } from '../../actions/index'

class Header extends Component {
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

  resetState = () => {
    this.setState({search: ''})
  }

  incrementPage = async () => {
    this.props.removeArticlesFromStore()
    let newPage = this.state.pageNumber + 1
    await this.setState({pageNumber: newPage})
    if (this.state.search) {
      this.props.fetchSearchedHeadlines(this.state.search, this.state.pageNumber)
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

  render() {
    return (
      <header className="header">
        <button className="nav-btn nav-left" onClick={this.decrementPage}>PREVIOUS</button>
        <div className="logo-search">
          <h1><img src={flag} alt="flag" className="flag left-flag" /><span className="red">Veter</span>Informant<img src={flag} alt="flag" className="flag" /></h1>
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

const mapDispatchToProps = (dispatch) => ({
  fetchRecentHeadlines: (page) => dispatch(fetchRecentHeadlines(page)),
  removeArticlesFromStore: () => dispatch(removeArticlesFromStore()),
  fetchSearchedHeadlines: (search, page) => dispatch(fetchSearchedHeadlines(search, page))
})

export default connect(null, mapDispatchToProps)(Header)
