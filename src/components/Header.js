import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import {Route, Link, Switch} from 'react-router-dom'
import './Header.css'
import Landing from './Landing'
import Shop from './Shop'

// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <div>
          <div>
            <Navbar className='page-header' brand='Dollar Beer Club' right>
              {/* <div className='waves-effect waves-light btn #ff8f00 amber darken-3 centered-header'><Link to='/shop'>Get A Pint Today!</Link></div> */}
              <NavItem href='#'><div className=''><Link to='/home'>Sign In</Link></div></NavItem>
              <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
              <NavItem href='#'><div className=''>About</div></NavItem>
              <NavItem href='#'><div className=''><Link to='/shop'>Crafted Beers</Link></div></NavItem>
            </Navbar>
          </div>

          <div>
            <Switch>
              <Route exact path='/home' render={() => <Landing />} />
              <Route path='/shop' render={() => <Shop />} />
              <Route path='/logon' />
              <Route path='/register' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
