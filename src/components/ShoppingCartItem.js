import React, { Component } from 'react'
import { CardTitle, Card, Button } from 'react-materialize'
import '../styles/ShoppingCartItem.css'

class ShoppingCartItem extends Component {
  constructor (props) {
    super(props)
  }

  // onClick () {
  //   this.props.addItem()
  // }

  render () {
    let itemName = this.props.beer.bName
    let itemImg = this.props.beer.bPic
    let itemPrice = this.props.beer.bPrice
    let itemQuantity = this.props.beer.bQt

    return (
      <div className='item-container'>
        <Card
          className='card hoverable col s12 m3'
          header={<CardTitle reveal image={itemImg}
            waves='light' />}
          title={<h5
            className=''
            style={{fontSize: 20}}> {itemName}   |   Quantity: {itemQuantity}   |   Subtotal: ${itemPrice * itemQuantity}</h5>}>
          <Button onClick={this.onClick} floating className='red hoverable halfway-fab' waves='light' icon='add' style={{position: 'absolute', bottom: 90, right: 8}} />
          <Button floating className='red hoverable halfway-fab' waves='light' icon='remove' style={{position: 'absolute', bottom: 90, left: 8}} />

        </Card>

      </div>
    )
  }
}

export default ShoppingCartItem
