import React from 'react'
import { Route, Link } from 'react-router-dom'

const HelpCustomer = () => <h3>Help Customer</h3>
const HelpHost= () => <h3>Help Host</h3>

const Help = () => {
    return (
        <div>
            <div>
                <Link to="/help/customer">Customer</Link>
                <Link to="/help/host">Host</Link>
            </div>
            <h1>Help</h1>
            <p>An image should be here</p>
            <Route path="/help/customer" component={HelpCustomer} />
            <Route path="/help/host" component={HelpHost} />
        </div>
    )
}

export default Help
