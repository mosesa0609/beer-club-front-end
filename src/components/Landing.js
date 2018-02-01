import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { Button } from 'react-materialize'
import '../styles/Landing.css'
import {Link} from 'react-router-dom'

import Welcome from './Welcome'
import About from './About'

class Landing extends Component {
  render () {
    return (
      <div>
        <Welcome />
        <About />
      </div>
    )
  }
}

export default Landing
