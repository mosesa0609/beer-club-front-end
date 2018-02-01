import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import '../styles/Header.css'
import Landing from './Landing'
import Shop from './Shop'
import Register from './Register'
import Container from './Container'
// import InitialSearch from '../src/components/InitialSearch'

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
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     firstVisit: false
  //   }
  // }

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     search: '',
  //     searchedResults: {}
  //   }
  // }

  // handleSearch (e) {
  //   this.setState({
  //     search: e.target.value
  //   })
  // }

  // searchedContent (e) {
  //   e.preventDefault()
  // }

  render () {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Navbar className='page-header' brand='Dollar Beer Club' right style={{height: 120}}>
                <Container />
                <NavItem href='#'><div className=''><Link to='/'>Sign In</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
                <NavItem href='#'><div className=''>About</div></NavItem>
                <NavItem href='#'><div className=''><Link to='/shop'>Crafted Beers</Link></div></NavItem>
              </Navbar>
            </div>

            <div>
              <Switch>
                <Route path='/shop' component={Shop} />
                <Route path='/logon' component={Shop} />
                <Route path='/register' component={Register} />
                {/* <Route path='/search/:name' component={Shop} /> */}
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
