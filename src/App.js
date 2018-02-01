import React, { Component } from 'react'
import Landing from '../src/components/Landing'
import ShoppingCart from '../src/components/ShoppingCart'
import Billing from './components/Billing'
import About from '../src/components/About'

class App extends Component {
  render () {
    return (
      <div>
        <main>
          <Landing />
        </main>
      </div>
    )
  }
}

export default App
