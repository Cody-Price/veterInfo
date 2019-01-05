import React, { Component } from 'react'
import './Search.scss'
import flag from '../../assets/flag-gif.gif'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.resetState()
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({[name]: value})
  }

  resetState = () => {
    this.setState({search: ''})
  }

  render() {
    return (
      <header className="header">
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
      </header>
    )
  }
}

export default Search
