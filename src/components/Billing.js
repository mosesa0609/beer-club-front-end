import React, {Component} from 'react'

class Billing extends Component {
    render() {
        return(
            <div>
                <h3>Billing Info</h3>
                <form action="/" method="post">
                <input type="number" name="Credit Card Number" placeholder="1234 5678 9012 3456" />
                <input type="number" name="Experation" placeholder="MM/YY" />
                <input type="text" name="CVC" placeholder="CVC" />
                </form>
            </div>
        )
    }
}

export default Billing
