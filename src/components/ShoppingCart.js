// Need to add react-router-dom
import uuid from 'uuid'
import React, {Component} from 'react'
import Shipping from './Shipping'
import Billing from './Billing'
import ShoppingCartItem from './ShoppingCartItem'
// import Cart from './Cart'
import Utils from './Utils'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cartItems: [

        {
          'bName': '3rd Stone Apricot Sour Ale',
          'bQt': '1',
          'bPrice': 7,
          'bPic': 'https://i.imgur.com/S2SXqLn.png'
        },
        {
          'bName': 'Almanac Golden Gates Gose',
          'bQt': '1',
          'bPrice': 7,
          'bPic': 'https://i.imgur.com/7wC8RUG.png'
        }
      ],
      orderTotal: 0,
      orderNumber: uuid.v4()
    }
  }

  componentWillMount () {
    let incomingItems = this.queryCart()
    this.setState = ({cartItems: incomingItems})
  }

  calculateTotal () {
    // let newTotal = 0
    // this.state.cartItems.forEach((beer) => {
    //   newTotal += beer.bQt * beer.bPrice
    // //   console.log(newTotal)
    // })
    let newTotal = this.state.cartItems.reduce((sum, beer) => {
      return sum += beer.bQt * beer.bPrice
    }, 0)
    this.setState(
      prevState => ({ orderTotal: newTotal }),
      () => console.log(this.state.orderTotal, newTotal)
    )
  }

  componentDidMount () {
    this.calculateTotal()
    console.log(this.state.orderTotal)
  }

  updateQuantity (e, currentIndex, newQt) {
    this.setState({

      cartItems: this.state.cartItems.map((item, idx) => {
        if (idx === currentIndex) item.bQt = newQt
        return item
      })
    }), () => console.log(this.state.orderTotal, currentIndex, newQt)
    this.calculateTotal()
  }

  //
  render () {
    let beers = this.state.cartItems.map((beer, index) => {
      return (
        <ShoppingCartItem onUpdate={this.updateQuantity.bind(this)} beer={beer} key={index} index={index} />
      )
    })
    return (
      <div>
        <div>{beers}</div>
        <h1>{this.state.orderTotal}</h1>
        <Billing />
        <Shipping />
      </div>
    )
  }
}

export default ShoppingCart
