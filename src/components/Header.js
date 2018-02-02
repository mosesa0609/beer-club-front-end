import React, {Component} from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import '../styles/Header.css'
import Landing from './Landing'
import Shop from './Shop'
<<<<<<< HEAD
import Register from './Register'
import Container from './Container'
import '../script.js'
import About from './About';
import Billing from './Billing';
// import ShoppingCart from './ShoppingCart'
// import InitialSearch from '../src/components/InitialSearch'
=======
import Login from './Login'
import About from './About'
import ShoppingCart from './ShoppingCart'
>>>>>>> 9383919e68889c3898ec71d13c864c7700a60d92

// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  updateSearchTerm = (search) => {
    this.setState({search})
  }
  

  render () {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Navbar className='page-header' id='sticky-nav' brand='Dollar Beer Club' right style={{fontFamily: 'Yanone Kaffeesatz', fontWeight: 'lighter'}}>
                {/* <Container /> */}
                <NavItem href='#'><div className=''><Link to='/register'>Sign In</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/about'>About</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/shop'>Crafted Beers</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/cart'><Icon right>shopping_cart</Icon></Link></div></NavItem>
              </Navbar>
            </div>

            <div>
              <Switch>
                <Route path='/shop' component={Shop} />
                <Route path='/logon' component={Login} />
                <Route path='/register' component={Resgister} />
                <Route path='/about' component={About} />
                <Route path='/' component={Landing} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Header
