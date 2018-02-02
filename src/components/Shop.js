import React, {Component} from 'react'
// import Results from './Results'
import Container from './Container'
import '../styles/Shop.css'

class Shop extends Component {
  render () {
    return (
      <div className=''>
        <div>
          <Container />
          <div>
            <div style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '40vh'}} />
          </div>
        </div>
      </div>
    )
  }
}

export default Shop
