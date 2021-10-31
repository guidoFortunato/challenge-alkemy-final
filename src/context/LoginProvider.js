import React from 'react'

export const LoginContext = React.createContext()

const LoginProvider = (props) => {


    //const [theme, setTheme] = React.useState()
    const [login, setLogin] = React.useState(false)

    React.useEffect(() => {
        
        if (localStorage.getItem('loginValue')) {
            const loginValue = JSON.parse(localStorage.getItem('loginValue'))
            setLogin(loginValue)
        }


    }, [])
    
    const cambiarLogin = valor => {
        setLogin(valor)
        localStorage.setItem('loginValue', JSON.stringify(valor))
    }


    return (
        <LoginContext.Provider value={{login, cambiarLogin}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
