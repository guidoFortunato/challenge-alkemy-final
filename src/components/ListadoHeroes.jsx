import React from 'react'
import { Link } from 'react-router-dom';

const ListadoHeroes = () => {

    const [listaHeroes, setListaHeroes] = React.useState([])
    const [buscadorHeroes, setBuscadorHeroes] = React.useState('')
    const [miEquipo, setMiEquipo] = React.useState([])

    React.useEffect(() => {

        const getData = async () => {

            const listaNueva = []

            try {

                for (let i = 60; i < 80; i++) {                 
                    const data = await fetch(`https://www.superheroapi.com/api.php/10225724594719868/${i}`)
                    const res = await data.json()
                    listaNueva.push(res.name)
                }
                setListaHeroes(listaNueva)



            } catch (error) {
                console.log(error)
            }
        }


        getData()

    }, [])

    const verDetalle = () => {
        console.log('ver detalle')
    }
    const agregar = (item) => {
        //console.log(item.name)

        const indiceHeroe = listaHeroes.findIndex(heroe => heroe === item.name)
        listaHeroes.splice(indiceHeroe, 1)
        
        

        
        setMiEquipo([
            ...miEquipo,
            item.name
        ])
        setBuscadorHeroes('')
        
    }

    const eliminar = (item) => {
        
        const elementofiltrado = miEquipo.find(heroe => heroe === item.name)
        listaHeroes.push(elementofiltrado)
        const listaFiltrada = miEquipo.filter(heroe => heroe !== item.name)
        setMiEquipo(listaFiltrada)
    }
    const filtradoHeroes = listaHeroes.filter(heroe => heroe.toLowerCase().includes(buscadorHeroes.toLowerCase()))

    //console.log(filtradoEquipo)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className='text-center'>Listado</h1>
                    <hr />
                    
                    <ul className="list-group">
                        {
                            filtradoHeroes.map((item, index) => (
                                <li className="list-group-item" key={index}>
                                    {item}
                                    <button
                                        className='btn btn-primary btn-sm float-end ms-2'
                                        onClick={() => verDetalle()}
                                        type='button'
                                    >
                                        <Link
                                            to={`/heroes/${item}`}
                                            className='link'
                                        >
                                            Detalle
                                        </Link>
                                    </button>
                                    <button
                                        className='btn btn-warning btn-sm float-end'
                                        onClick={() => agregar({name: item})}
                                        type='button'
                                    >
                                        Agregar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                

                    
                <div className="col-12 col-md-6">
                    <form>
                        <h1 className='text-center mt-5 mt-md-0'>Buscador</h1>
                        <hr />
                        <input
                            type="text"
                            className='form-control'
                            onChange={e => setBuscadorHeroes(e.target.value)}
                            value={buscadorHeroes}
                        />
                    </form>
                    <h1 className='text-center mt-5'>Mi equipo</h1>
                    <hr />
                    <ul className="list-group">
                        {
                            miEquipo.map((item, index) => (

                                <li className="list-group-item" key={index}>
                                    {item}
                                    <button
                                        className='btn btn-danger btn-sm float-end'
                                        onClick={() => eliminar({ name: item })}
                                        type='button'
                                    >
                                        Eliminar
                                    </button>
                                </li>

                            ))
                        }
                    </ul>

                </div>
                   
                
            </div>
        </div>
    )
}

export default ListadoHeroes
