import React, { Component } from 'react'
<<<<<<< HEAD
import Header from '../src/components/Header'
import Footers from '../src/components/Footer'
// import Landing from '../src/components/Landing'
// import ShoppingCart from '../src/components/ShoppingCart'
// import Billing from '../src/components/Billing'
=======
import Landing from '../src/components/Landing'
>>>>>>> 9383919e68889c3898ec71d13c864c7700a60d92

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          {/* <Landing /> */}
        </main>
        <footer>
          <Footers />
        </footer>
      </div>
    )
  }
}

export default App
