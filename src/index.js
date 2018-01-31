import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <div>
  <Router>
    <Header />
  </Router>
  <Router>
    <Footer />
    {/* <App /> */}
  </Router>
  </div>
, document.getElementById('root'))
registerServiceWorker()
