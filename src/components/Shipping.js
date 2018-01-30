import React, {Component} from 'react'

class Shipping extends Component {
    render() {
        return(
            <div>
                <h3>Shipping Info</h3>
                <form action="/" method="post">
                <input type="text" name="First Name" placeholder="First Name" />
                <input type="text" name="Last Name" placeholder="Last Name" />
                <input type="text" name="Address" placeholder="Address" />
                <input type="text" name="Address Line 2" placeholder="Address (Cont)" />
                <input type="text" name="City" placeholder="City" />
                <input type="text" name="State" placeholder="State" />
                <input type="number" name="Zip Code" placeholder="Zip Code" />
                <input type="number" name="Phone Number" placeholder="Phone Number" />
                </form>
            </div>
        )
    }
}

export default Shipping
