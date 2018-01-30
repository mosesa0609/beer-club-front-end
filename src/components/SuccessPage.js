import React, {Component} from 'react'
import { Card, Col } from 'react-materialize'
import './styles/SuccessPage.css'

class SuccessPage extends Component {
  render () {
    return (
      <div className='receipt-container'>
        <Card className='#ffca28 amber lighten-5' actions={[<a href='/'>Back to Shopping</a>]}>
          <h3>Order Summary</h3>
          <div className='individual-item'>
            <p>Order Number: #90000383838</p>
            <p>Item: Almanac Golden Gates Gose</p>
            <p>Quantity: 5</p>
            <p>Shipping Method: UPS Ground</p>
            <p>Shipping cost: $7.99</p>
            <p>Total: $45.14</p>
          </div>
          <div className='total-order'>
            <p>Order Total: $45.14</p>
          </div>
        </Card>
      </div>
    )
  }
}

export default SuccessPage
