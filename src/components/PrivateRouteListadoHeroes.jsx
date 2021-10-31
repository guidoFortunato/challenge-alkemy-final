import React from 'react'
import { Redirect, Route } from 'react-router'
import { LoginContext } from '../context/LoginProvider'

const PrivateRouteListadoHeroes = ({ component: Component, ...rest }) => {

    const { login } = React.useContext(LoginContext)

    return (
        <Route {...rest}>{login ? <Component /> : <Redirect to='/login' />}</Route>
    )
}

export default PrivateRouteListadoHeroes
