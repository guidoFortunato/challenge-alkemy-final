import React from 'react'
import { useParams, withRouter } from 'react-router'
import '../app.css'

const Heroe = (props) => {
   
    const { name } = useParams()

    const [heroes, setHeroes] = React.useState([])

    React.useEffect(() => {

        const getData = async () => {

            

            try {
                const data = await fetch(`https://www.superheroapi.com/api.php/10225724594719868/search/${name}`)
                const res = await data.json()
                console.log(res.results[0])
                const info = res.results[0]
                setHeroes(info)
                
                


            } catch (error) {
                console.log(error)
            }
        }


        getData()

    }, [name])



    return (
        
            <div className="row">
                <div className="col-12 col-sm-4 "></div>
                <div className="col-12 col-sm-4">

                
                    <div className="card app">
                        <div className ="card-body">
                        <h4 className="card-title">{heroes.name}</h4>
                        {/* {
                            heroes.biography.aliases ? (<h5 className="card-title">Alias: {heroes.biography.aliases}</h5>) : null
                        }
                        {
                            heroes.appearance.gender ? (<p className="card-text">Gender: {heroes.appearance.gender}</p>) : null
                        }
                        {
                            heroes.appearance['hair-color'] ? (<p className="card-text">Hair color: {heroes.appearance['hair-color']}</p>) : null
                        }
                        {
                            heroes.appearance.height[1] ? (<p className="card-text">Height: {heroes.appearance.height[1]}</p>) : null
                        }
                        {
                            heroes.appearance.weight[1] ? (<p className="card-text">Weight: {heroes.appearance.weight[1]}</p>) : null
                        } */}
                            <button
                                className="btn btn-primary btn-sm mt-3"
                                onClick={() => props.history.push('/heroes')}
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        
    )
}

export default withRouter(Heroe)
