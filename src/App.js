import React, { Component } from 'react'
// import Header from '../src/components/Header'
// import Footers from '../src/components/Footer'
import Landing from '../src/components/Landing'
// import Shop from '../src/components/Shop'
// import './App.css';
import ShoppingCart from '../src/components/ShoppingCart'

class App extends Component {
  render () {
    return (
      <div>
        {/* <header>
          <Header />
        </header> */}
        <main>
          <ShoppingCart />
        </main>
        {/* <footer>
          <Footers />
        </footer> */}
      </div>
    )
  }
}

export default App
