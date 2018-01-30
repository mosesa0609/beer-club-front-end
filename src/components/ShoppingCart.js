import React, {Component} from 'react'
import Shipping from './Shipping'
import Billing from './Billing'
import Cart from './Cart'

class ShoppingCart extends Component {
    render() {
        return(
            <div>
                <Shipping />
                <Billing />
                <Cart />
            </div>
        )
    }
}

export default ShoppingCart
