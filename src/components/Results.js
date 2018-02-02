import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import {buyBeer} from './Utils'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyPic: 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg',
      isButtonDisabled: false
    }
    //this.onSearchAgain = this.onSearchAgain.bind(this)
  }

  onSearchAgain = () => {
    this.props.onSearchAgain()
  }
  reloadApp(e) {
    window.location.reload(true);
    e.preventDefault();
  }
  addToCart = (e, id) => {
    e.preventDefault()
    buyBeer(id)
    this.setState({
      isButtonDisabled: false
    })
  }
  // componentDidMount = () => {
  // axios
  //     .get()
  //     .then(() => {

  //     })
  // }
  
  render () {
    let {searchResults} = this.props
    let beerKeg = searchResults.map((beer, index) => {
      console.log(beer)
      return (
      <Card key={index} className='card hoverable col s12 m4' header={<CardTitle reveal image={beer.labels ? beer.labels.large : this.state.dummyPic} waves='light' />} title={<h5 className='' style={{fontSize: 20}}> {beer.name}</h5>}
        reveal={[
          <div>
            <h4>$7</h4>
            <p>Description: {beer.description}</p>
            <p>Brew Style: {beer.style.name}</p>
            <p>ABV: {beer.abv}</p>
          </div>
        ]}>
        <Button id={'btn_'+ beer.id} floating onClick={e =>this.addToCart(e, beer.id)} 
        disabled={this.state.isButtonDisabled} 
        className='red hoverable halfway-fab' waves='light' icon='add' 
        style={{position: 'absolute', bottom: 90, right: 8}} />
      </Card>
    )
    })
    return (
      <div>
        
        {/* <Button waves='light' className='centered-landing-btn white'onClick={this.onSearchAgain}>Search For Another</Button> */}
      <div className='row'>
      <div className='center-align'>
      <Button type='button' onClick={this.reloadApp}>Search For Another</Button>
      </div>
        {beerKeg}
      </div>
      </div>
    )
  }
}

export default Results
