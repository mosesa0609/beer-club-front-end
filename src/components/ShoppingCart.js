// Need to add react-router-dom

import React, {Component} from 'react'
import Shipping from './Shipping'
import Billing from './Billing'
import Cart from './Cart'

const beers = [
    {
      'name': 'Belgian Golden Strong Ale',
      'brewery': 'Lazy Boy Brewing Company',
      'abv': 9.3,
      'img': 'https://i.imgur.com/sDjjBdi.png'
    },
    {
      'name': '3rd Stone Apricot Sour Ale',
      'brewery': 'Union Craft Brewing Company',
      'abv': 5.5,
      'img': 'https://i.imgur.com/S2SXqLn.png'
    },
    {
      'name': 'Almanac Golden Gates Gose',
      'brewery': 'Almanac Beer Co',
      'abv': 5,
      'img': 'https://i.imgur.com/7wC8RUG.png'
    }
]

class ShoppingCart extends Component {
  state = {
    beers: [
      {
        'name': 'Belgian Golden Strong Ale',
        'brewery': 'Lazy Boy Brewing Company',
        'abv': 9.3,
        'img': 'https://i.imgur.com/sDjjBdi.png'
      },
      {
        'name': '3rd Stone Apricot Sour Ale',
        'brewery': 'Union Craft Brewing Company',
        'abv': 5.5,
        'img': 'https://i.imgur.com/S2SXqLn.png'
      },
      {
        'name': 'Almanac Golden Gates Gose',
        'brewery': 'Almanac Beer Co',
        'abv': 5,
        'img': 'https://i.imgur.com/7wC8RUG.png'
      }
    ],
    subtotal: 0,
    taxPercent: 6,
    taxTotal: 0,
    shipping: 0,
    orderTotal: 0
  }
  //
  render() {
    let beers = this.state.beers
      return(
        <div>
          {
            beers.map((beer, index) => {
              return <li key={index}>
                <div>
                  <h5>{beer.name}</h5>
                  <p>from {beer.brewery}</p>
                  <p>ABV: {beer.abv}</p>
                  <img src={`${beer.img}`} />
                </div>
              </li>
            })
          }
          <Billing />
          <Shipping />
        </div>
      )
    }
  }

export default ShoppingCart
