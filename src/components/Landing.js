import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { Button } from 'react-materialize'
import './Landing.css'

class Landing extends Component {
  render () {
    return (
      <div>
        <Parallax bgImage='https://images.unsplash.com/photo-1509762372-36de55acf406?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfaa0c61287ee72e79e586823274c48d&auto=format&fit=crop&w=1500&q=80'style={{height: 500}}>
          <div>
            <div className='white-text'>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
            </div>
            <Button waves='light' className='centered-landing-btn'>Get A Pint Today!</Button>
          </div>
        </Parallax>
      </div>
    )
  }
}

export default Landing
