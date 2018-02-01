import React, {Component} from 'react'
import { Card, Button, Row, Input } from 'react-materialize'
import '../styles/Login.css'
import Billing from './Billing'

class Login extends Component {
    render () {
        return (
            <div className="login-container">
            <Card className='#ffca28 amber lighten-5'>
                <h3>Login Page</h3>
                <form>
                <Input className='#ffca28'type="text" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
                <Button className='#ff8f00 amber darken-3' type="submit">Login</Button>
                </form>
            </Card>
            </div>
        )
    }
}

export default Login
