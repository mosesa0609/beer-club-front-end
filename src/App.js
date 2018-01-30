import React, { Component } from 'react'
import Header from '../src/components/Header'
import Footers from '../src/components/Footer'
import ShoppingCart from '../src/components/ShoppingCart'
// import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          {/* <ShoppingCart /> */}
        </main>
        <footer>
          <Footers />
        </footer>
      </div>
    )
  }
}

export default App
