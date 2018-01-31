import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import axios from 'axios'
import { Parallax } from 'react-parallax'
// import requestDBC from '../../src/request'

class Shop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyPic: 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg',
      searchResults: [
        // {
        //   name: 'Belgian Golden Strong Ale',
        //   price: 7,
        //   brewery: 'Lazy Boy Brewing Company',
        //   abv: 9.3,
        //   style: 'something here',
        //   img: 'https://i.imgur.com/sDjjBdi.png'
        // },
        // {
        //   name: '3rd Stone Apricot Sour Ale',
        //   price: 7,
        //   brewery: 'Union Craft Brewing Company',
        //   abv: 5.5,
        //   style: 'something here',
        //   img: 'https://i.imgur.com/S2SXqLn.png'
        // }
      ]
    }
  }

  componentDidMount () {
    axios
      .get(`http://localhost:4000/search/bud`)
      .then(res => {
        const beers = res.data.map(data => data)
        this.setState(prevState => ({
          searchResults: beers
        }))
      })
  }

  render () {
    let beerKeg = this.state.searchResults.map((beer, index) => {
      console.log(beer.labels)
      return (
        <Card className='card hoverable col s12 m3' header={<CardTitle reveal image={beer.labels ? beer.labels.large : this.state.dummyPic} waves='light' />} title={<h5 className='' style={{fontSize: 20}}> {beer.name}</h5>}
          reveal={[
            <div>
              <h4>$7</h4>
              <h5>Description: {beer.description}</h5>
              <h5>Brew Style: {beer.style.name}</h5>
              <h5>ABV: {beer.abv}</h5>
            </div>
          ]}>
          <Button floating className='red hoverable halfway-fab' waves='light' icon='add' style={{position: 'absolute', bottom: 90, right: 8}} />
        </Card>
      )
    })
    return (
      <div className='row'>
        {beerKeg}
      </div>
    )
  }
}

export default Shop
