import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/actions'
import styles from '../styles/Detail.module.css'
const Detail = () => {
    const dispatch = useDispatch()
    const country = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    return !country ? <div> Now Loading...</div> :
       
            <div className={styles.container}>
                <h2 className={styles.description}>Id: {country.id}</h2>
                <h2>Nombre: {country.name} </h2>
                <img src={country.image} alt='' className={styles.image} />
                <h2 className={styles.description}>Continente: {country.continent}</h2>
                <h2 className={styles.description}>Capital: {country.capital}</h2>
                <h2 className={styles.description}>Subregión: {country.subregion}</h2>
                <h2 className={styles.description}>Área: {country.area}</h2>
                <h2 className={styles.description}>Población: {country.population}</h2>
                <div>
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