import React from 'react'
import { withRouter } from 'react-router'
import { LoginContext } from '../context/LoginProvider'


const Login = (props) => {

    const { cambiarLogin } = React.useContext(LoginContext)

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    
    
    
    
    
    const procesarDatos = (e) => {
        e.preventDefault()
        
        if (!email.trim()) {
            setError('Email vacío')
            return
        }
        if (!pass.trim()) {
            setError('Pass vacío')
            return
        }

        if (email !== 'challenge@alkemy.org') {
            const obtenerDatosErroneos = async () => {
                const data = await fetch('http://challenge-react.alkemy.org/')
                const res = await data.json()
                setError(res.error)
            }
            obtenerDatosErroneos()
            return
        }
        if (pass !== 'react') {
            const obtenerDatosErroneos = async () => {
                const data = await fetch('http://challenge-react.alkemy.org/')
                const res = await data.json()
                setError(res.error)
            }
            obtenerDatosErroneos()
            return
        }


        localStorage.setItem('token', '10225724594719868')
        setEmail('')
        setPass('')
        setError(null)
        cambiarLogin(true)
        props.history.push('/heroes')


        console.log('procesado')
    }








    return (
        <div className='mt-5'>
            <h2 className='text-center'>Login</h2>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error !== null ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
                        <input
                            className='form-control mb-2'
                            type="email"
                            placeholder='Ingrese un email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese un password'
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                        <button
                            className='btn btn-primary w-100 btn-lg'
                            type='submit'
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
