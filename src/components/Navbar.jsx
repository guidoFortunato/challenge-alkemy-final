import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LoginContext } from '../context/LoginProvider'

const Navbar = () => {

    const { login, cambiarLogin } = React.useContext(LoginContext)
    console.log(login)

    const loginFalse = () => {
        cambiarLogin(false)
    }
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand ms-4" to='/'>Alkemy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        
                        {
                            login ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className='btn btn-dark mt-2 me-2 mt-lg-0' to='/heroes'>
                                            Héroes
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className='btn btn-dark mt-2 me-2 mt-lg-0'
                                            to='/'
                                            onClick={()=>loginFalse()}
                                        >
                                            Cerrar sesión
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className='btn btn-dark mt-2 me-2 mt-lg-0' to='/' exact>
                                                Inicio
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className='btn btn-dark mt-2 me-2 mt-lg-0' to='/login'>
                                                Login
                                            </NavLink>
                                        </li>
                                    </>
                            )
                        }
                        



                        
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
