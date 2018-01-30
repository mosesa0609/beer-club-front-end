import React, {Component} from 'react'
import { Card, Col } from 'react-materialize'
import './SuccessPage.css'

class SuccessPage extends Component {
  render () {
    return (
      <div className='component-container'>
        <div className='receipt-container'>
          <h3>Order Summary</h3>
          <div className='individual-item'>
            <p>Item</p>
            <p>Quantity</p>
            <p>Shipping Method</p>
            <p>Shipping cost</p>
            <p>Total</p>
          </div>
          <div className='total-order'>
            <p>Order Total</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SuccessPage
