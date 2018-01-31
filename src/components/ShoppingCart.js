// Need to add react-router-dom

import React, {Component} from 'react'
import Shipping from './Shipping'
import Billing from './Billing'
// import Cart from './Cart'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: [

        {
          'bName': '3rd Stone Apricot Sour Ale',
          'bQt': '4',
          'bPrice': 7,
          'bPic': 'https://i.imgur.com/S2SXqLn.png'
        },
        {
          'bName': 'Almanac Golden Gates Gose',
          'bQt': '3',
          'bPrice': 7,
          'bPic': 'https://i.imgur.com/7wC8RUG.png'
        }
      ],
      orderTotal: 0
    }
  }

  calculateTotal () {
    let newTotal = this.state.beers.forEach((beer, index) => {
      this.state.orderTotal += beer.bQt * beer.bPrice
    //   console.log(newTotal)
    })
    this.setState({ orderTotal: newTotal })
    // console.log(newTotal)
    console.log(this.state.orderTotal)
  }

  componentDidMount () {
    this.calculateTotal()
    console.log(this.state.orderTotal)
  }
  //
  render () {
    let beers = this.state.beers
    return (
      <div>
        {
            beers.map((beer, index) => {
              return <li key={index}>
                <div>
                  <h5>{beer.bName}</h5>
                  <p>${beer.bPrice * beer.bQt}</p>
                  <img src={`${beer.bPic}`} />
                </div>
              </li>
            })
          }
        <Billing />
        <Shipping />
      </div>
    )
  }
}

export default ShoppingCart
