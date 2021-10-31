import React from 'react'
import { withRouter } from 'react-router'
import  alkemy from '../img/alkemy.jpg'

const Inicio = (props) => {

    const redirection = () => {
        props.history.push('/login')
    }




    return (
        
        <main className='contenido text-center'>

                <div className="card__image-container">
                <img src={alkemy} alt="" />
                </div>
                <div className="card__header">
                    <h2 className="title">Bienvenidos al challenge de Alkemy</h2> <br />
                <h5 className="subtitle">Para iniciar<button
                    className='btn btn-primary ms-2'
                    onClick={() => redirection()}
                >
                    click aquí
                </button></h5><br />
                
                </div>
        </main>
       

                
        
    )
}

export default withRouter(Inicio)
