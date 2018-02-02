import React, {Component} from 'react'
import { Card, CardTitle, Button, Container } from 'react-materialize'
import axios from 'axios'
import { Parallax } from 'react-parallax'
import requestDBC from '../../src/request'
import { queryBrewery } from './Utils'
import Results from './Results';
import Search from './Search';

class Shop extends Component {
  render () {
    return (
      <div>
        <div>
          <Container />
          <div>
            <div style={{backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vh'}}>

            </div>
          </div>
        </div>
      </div>
    )
  }
  render () {
    let beerKeg = this.state.searchResults.map((beer, index) => {
      console.log(beer)
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
      <div className='nav-wrapper'>
                  <form>
                    <div className='input-field black centered-header'>
                      <input id='search' type='search' onChange={(e) => this.handleSearch(e)} required />
                      <label className='label-icon' for='search'><i class='material-icons'>search</i></label>
                      <i className='material-icons'>close</i>
                    </div>
                  </form>
                </div>
        {beerKeg}
      </div>
    )
  }
}

export default Shop
