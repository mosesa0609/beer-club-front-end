import React, { Component } from 'react'
import { Card, Button, Row, Input } from 'react-materialize'
import '../styles/Billing.css'
// probably need Router to switch to next page in process

class Billing extends Component {
  constructor (props) {
    super(props)
    this.state = {
         // make sure these match mongoose schema & form name attrs
      creditCard: '',
      expiration: '',
      cvc: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  // will need a handleSubmit functino bound to the state and passed to button
  // as onSubmit

  render () {
    return (
      <div className='billing-container'>
        <Card className='#ffca28 amber lighten-5' actions={[<a href='#'>Go Back</a>]}>
          <h3>Billing Info</h3>
          <Row>
            <Input onChange={this.handleChange} type='text' name='creditCard' placeholder='Credit Card Number' />
            <Input onChange={this.handleChange} type='text' name='expiration' placeholder='Expiration Date MM/YY' />
            <Input onChange={this.handleChange} type='text' name='cvc' placeholder='CVC' />
            <Button className='#ff8f00 amber darken-3' type='submit'>Submit Payment</Button>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Billing
