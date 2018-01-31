import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import axios from 'axios'
// import requestDBC from '../../src/request'

class Shop extends Component {
  constructor (props) {
    super(props)
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

  componentDidMount () {
    axios
      .get(`http://localhost:4000/search/bud`)
      .then(res => {
        const beers = res.body.map(obj => obj.data)
        this.setState({ beers })
      })
  }

  render () {
    let beer = this.state.beers.map((beer, index) => {
      console.log(beer.body)
      return (
        // <div key={index + 1} className='card col m4'>
        //   <div className='card-image waves-effect waves-block waves-light'>
        //     <img className='activator' src={beer.img} />
        //     {/* <a class='btn-floating halfway-fab waves-effect waves-light red'><i className='material-icons'>add</i></a> */}
        //   </div>
        <Card className='card hoverable col s12 m3' header={<CardTitle reveal image={beer.img} waves='light' />} title={<h5 className='' style={{fontSize: 20}}> {beer.name}</h5>}
          reveal={[
            <div>
              <h4>${beer.price}</h4>
              <h5>Brewed By: {beer.brewery}</h5>
              <h5>Brew Style: {beer.style}</h5>
              <h5>ABV: {beer.abv}</h5>
            </div>
          ]}>
          <Button floating className='red hoverable halfway-fab' waves='light' icon='add' style={{position: 'absolute', bottom: 90, right: 8}} />

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
