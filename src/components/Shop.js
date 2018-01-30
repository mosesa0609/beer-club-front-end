import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
// import pokeRequest from '../../request'

class Shop extends Component {
  constructor (props) {
    super()
    this.state = {
      beers: [
        {
          name: 'Belgian Golden Strong Ale',
          price: 7,
          brewery: 'Lazy Boy Brewing Company',
          abv: 9.3,
          style: 'something here',
          img: 'https://i.imgur.com/sDjjBdi.png'
        },
        {
          name: '3rd Stone Apricot Sour Ale',
          price: 7,
          brewery: 'Union Craft Brewing Company',
          abv: 5.5,
          style: 'something here',
          img: 'https://i.imgur.com/S2SXqLn.png'
        },
        {
          name: 'Almanac Golden Gates Gose',
          price: 7,
          brewery: 'Almanac Beer Co',
          abv: 5,
          style: 'something here',
          img: 'https://i.imgur.com/7wC8RUG.png'
        },
        {
          name: 'Belgian Golden Strong Ale',
          price: 7,
          brewery: 'Lazy Boy Brewing Company',
          abv: 9.3,
          style: 'something here',
          img: 'https://i.imgur.com/sDjjBdi.png'
        },
        {
          name: '3rd Stone Apricot Sour Ale',
          price: 7,
          brewery: 'Union Craft Brewing Company',
          abv: 5.5,
          style: 'something here',
          img: 'https://i.imgur.com/S2SXqLn.png'
        },
        {
          name: 'Almanac Golden Gates Gose',
          price: 7,
          brewery: 'Almanac Beer Co',
          abv: 5,
          style: 'something here',
          img: 'https://i.imgur.com/7wC8RUG.png'
        }
      ]
    }
  }

  // componentDidMount () {
  //   pokeRequest.then(response => this.setState({pokemon: response.data}))
  //   .catch(err => console.log(err))
  // }

  render () {
    let beer = this.state.beers.map((beer, index) => {
      return (
        // <div key={index + 1} className='card col m4'>
        //   <div className='card-image waves-effect waves-block waves-light'>
        //     <img className='activator' src={beer.img} />
        //     {/* <a class='btn-floating halfway-fab waves-effect waves-light red'><i className='material-icons'>add</i></a> */}
        //   </div>
        <Card className='card hoverable col s3' horizontal header={<CardTitle image={beer.img} waves='light' />}>
          <Button floating large className='red hoverable right' waves='light' icon='add' />
          <h5>${beer.price}</h5> <h5>{beer.name}</h5>
          <h6>Brewed By: {beer.brewery}</h6>
          <h6>Brew Style: {beer.style}</h6>
          <h6>ABV: {beer.abv}</h6>
        </Card>

      )
    })
    return (
      <div className='row'>
        {beer}
      </div>
    )
  }
}

export default Shop
