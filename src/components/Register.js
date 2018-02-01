import React, {Component} from 'react'
import {Row, Input, Button, Icon} from 'react-materialize'
import '../styles/Register.css'

class Register extends Component {
  render () {
    return (
      <div className='bgImg'>
        <div className='container'>
          <div className='red border' style={{padding: 10}}>
            <div className='container' style={{width: 450, height: 500}}>
              <Row className='#f5f5f5 grey lighten-4' style={{padding: 30}}>
                <Input placeholder='First' s={6} label='First Name' />
                <Input placeholder='Last' s={6} label='Last Name' />
                <Input type='email' label='Email' s={12} />
                <Input placeholder='Username' s={12} label='User Name' />
                <Input type='password' label='Password' s={12} />
                <Input type='password' label='Confirm Password' s={12} />
                <Button waves='light' className='reg-button right' type='submit'>Register<Icon right>check</Icon></Button>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
