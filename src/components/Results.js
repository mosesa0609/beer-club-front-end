import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyPic: 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg'
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
      <Card key={index} className='card hoverable col s12 m3' header={<CardTitle reveal image={beer.labels ? beer.labels.large : this.state.dummyPic} waves='light' />} title={<h5 className='' style={{fontSize: 20}}> {beer.name}</h5>}
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
      <div>
        
        {/* <Button waves='light' className='centered-landing-btn white'onClick={this.onSearchAgain}>Search For Another</Button> */}
      <div className='row'>
      <Button type='button' onClick={this.reloadApp}>Search For Another</Button>
        {beerKeg}
      </div>
      </div>
    )
  }
}

export default Results
