import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/actions'
const Detail = () => {
    const dispatch = useDispatch()
    const country = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    return !country ? <div> Now Loading...</div> :
        <div>
            <h2>Id: {country.idPais}</h2>
            <h2>Nombre: {country.name} </h2>
            <img src={country.image} alt='' />
            <h2>Continente: {country.continent}</h2>
            <h2>Capital: {country.capital}</h2>
            <h2>Subregión: {country.subregion}</h2>
            <h2>Área: {country.area}</h2>
            <h2>Población: {country.population}</h2>
            <div>
            <h2>Actividades:</h2>
                {country.activities && country.activities.length > 0 ? (
                    <ul>
                        {country.activities.map(activity => (
                            <li key={activity.id}>
                                <h3>{activity.name}</h3>
                                <p>Duración: {activity.duration}</p>
                                <p>Dificultad: {activity.difficulty}</p>
                                <p>Temporada: {activity.season}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay actividades para este país.</p>
                )}
            </div>
        
        
        
        
        
        </div>
}

export default Detail