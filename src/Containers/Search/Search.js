import React, { Component } from 'react'
import './Search.scss'

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
      <div className="search-div">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default Search
