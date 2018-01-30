import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import './Header.css'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <Navbar className='#ffca28 amber lighten-1' brand='Dollar Beer Club' right>
        <div className='waves-effect waves-light btn #ff8f00 amber darken-3 centered-header'>Get A Pint Today!</div>
        <NavItem href='#'><div className=''>Sign In</div></NavItem>
        <NavItem href='#about'><div className=''>About</div></NavItem>
        <NavItem href='#products'><div className=''>Crafted Beers</div></NavItem>
      </Navbar>
    )
  }
}

export default Header
