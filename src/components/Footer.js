import React, {Component} from 'react'
import {Footer} from 'react-materialize'
import '../styles/Footer.css'

class Footers extends Component {
  render () {
    return (
      <div className='page-footer'><Footer copyrights='&copy; 2018 Copyright Dollar Beer Club'
        moreLinks={
          <a className='grey-text text-lighten-4 right' href='#!' />
}
        links={
          <ul>
            <li><a className='grey-text text-lighten-3' href='#!'>Twitter</a></li>
            <li><a className='grey-text text-lighten-3' href='#!'>Instagram</a></li>
            <li><a className='grey-text text-lighten-3' href='#!'>Facebook</a></li>
            <li><a className='grey-text text-lighten-3' href='#!'>LinkedIn</a></li>
          </ul>
}
        className='example'
>
        <h5 className='white-text'>Dollar Beer Club</h5>
        <p className='grey-text text-lighten-4'>Brief information about Dollar Beer Club. When it was establish blah blah blah...</p>
      </Footer></div>
    )
  }
}

export default Footers
