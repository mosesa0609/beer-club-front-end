import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ShoppingCart from '../src/components/ShoppingCart'

ReactDOM.render(
  <div>
    <Header />
    <ShoppingCart />
    <Footer />
  </div>
, document.getElementById('root'))
registerServiceWorker()
