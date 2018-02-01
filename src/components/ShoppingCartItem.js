import React, { Component } from 'react'
import { CardTitle, Card, Button, Input } from 'react-materialize'
import '../styles/ShoppingCartItem.css'
import ToggleDisplay from 'react-toggle-display'

class ShoppingCartItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false,
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

// set value of input to this.state.inputValue
// make function to handle change of state of the inputValue
// create function in ShoppingCart to update item quantity
// pass down function from shopping cart
// call function in handleUpdateClick
// call axios request to modify DB

  handleClick () {
    this.setState({
      show: !this.state.show
    })
  }

  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleUpdateClick (e) {
    this.setState({
      show: !this.state.show
    })
    console.log('handleUpdate in item', this.props.index, this.state.inputValue)
    this.props.onUpdate(e, this.props.index, this.state.inputValue)
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
          <ToggleDisplay show={this.state.show}>
            <Input type='number' onChange={this.handleChange} />
            <Button onClick={e => this.handleUpdateClick(e)} type='submit' >Change Quantity</Button>
          </ToggleDisplay>
          <Button onClick={() => this.handleClick()} floating className='red hoverable halfway-fab' waves='light' value='update order' style={{position: 'absolute', bottom: 90, right: 8}} >Update Order</Button>
        </Card>

      </div>
    )
  }
}

export default ShoppingCartItem
