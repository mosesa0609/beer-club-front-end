import React, {Component} from 'react'

class SuccessPage extends Component {
  render () {
    return (
      <div className='receipt-container'>
        <h3>Purchase Summary</h3>
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
    )
  }
}

export default SuccessPage
