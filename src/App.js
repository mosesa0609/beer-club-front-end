import React, { Component } from 'react'
import Header from '../src/components/Header'
import Footers from '../src/components/Footer'
// import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main />
        <footer>
          <Footers />
        </footer>
      </div>
    )
  }
}

export default App
