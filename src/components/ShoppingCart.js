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
    constructor(props) {
        super(props)
        this.state = {
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
    }
    render() {
        return(
            <div>
                    
            </div>
        )
    }
}

export default ShoppingCart
