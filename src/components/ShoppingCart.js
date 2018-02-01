// Need to add react-router-dom
import uuid from 'uuid'
import React, {Component} from 'react'
// import Shipping from './Shipping'
import Billing from './Billing'
import ShoppingCartItem from './ShoppingCartItem'
import Cart from './Cart'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cartItems: [

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
      orderTotal: 0,
      orderNumber: uuid.v4()
    }
  }

  calculateTotal () {
    let newTotal = this.state.cartItems.forEach((beer, index) => {
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

  updateQuantity (e, currentIndex, newQt) {
    console.log(e, currentIndex)
    this.setState(prevState => ({
      cartItems: prevState.cartItems.map((item, idx) => {
        if (idx === currentIndex) item.bQt = newQt
        return item
      })
    }))
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
        <Billing />
        {/* <Shipping /> */}
      </div>
    )
  }
}

export default ShoppingCart
