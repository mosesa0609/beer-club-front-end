import React, {Component} from 'react'
import {Footer} from 'react-materialize'
import {Link} from 'react-router-dom'
import './Footer.css'

class Footers extends Component {
  twitterLink (e) {
    window.location.assign('http://twitter.com')
  }
  instagramLink (e) {
    window.location.assign('http://instagram.com')
  }
  facebookLink (e) {
    window.location.assign('http://facebook.com')
  }
  linkedInLink (e) {
    window.location.assign('http://linkedin.com')
  }

  render () {
    return (
      <div className='page-footer'><Footer copyrights='&copy; 2018 Copyright Dollar Beer Club'
        moreLinks={
          <a className='grey-text text-lighten-4 right' href='#!' />
}
        links={
          <ul className='right'>
            <li><a onClick={(e) => { this.instagramLink(e) }}><img className='grey-text text-lighten-3 blue-text hoverable' style={{height: 30}} src='https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png' /></a></li>
            <li><a onClick={(e) => { this.facebookLink(e) }}><img className='grey-text text-lighten-3 blue-text hoverable' style={{height: 30}} src='https://kungfuoctopus.files.wordpress.com/2010/06/join-us-blue.png' /></a></li>
            <li><a onClick={(e) => { this.twitterLink(e) }}><img className='grey-text text-lighten-3 blue-text hoverable' style={{height: 30}} src='https://expedition196.com/wp-content/uploads/2015/01/twitterBUTTON.png' /></a></li>
            <li><a onClick={(e) => { this.linkedInLink(e) }}><img className='grey-text text-lighten-3 blue-text hoverable' style={{height: 30}} src='https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAibAAAAJDA4M2M4ZmMzLTI4YWQtNGE2Zi05YTI2LTBjZDhhMzk3ZmM4NA.png' /></a></li>
          </ul>
}
        className='example'
>
        <h5 className='white-text change'><Link to='/home'>Dollar Beer Club</Link></h5>
        <p className='grey-text text-lighten-4'>Brief information about Dollar Beer Club. When it was establish blah blah blah...</p>
      </Footer>
      </div>
    )
  }
}

export default Footers
