import React, { Component } from 'react'
import ArticleContainer from './Containers/ArticleContainer/ArticleContainer'
import Nav from './Containers/Nav/Nav'
import Search from './Containers/Search/Search'
import './App.css'

class App extends Component {
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

export default App;
