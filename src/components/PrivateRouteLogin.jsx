import React from 'react'
import { Redirect, Route } from 'react-router'
import { LoginContext } from '../context/LoginProvider'

const PrivateRouteLogin = ({ component: Component, ...rest }) => {
    
    const { login } = React.useContext(LoginContext)

    return (
        <Route {...rest}>{login ? <Redirect to='/heroes' /> : <Component /> }</Route>
    )
}

export default PrivateRouteLogin
