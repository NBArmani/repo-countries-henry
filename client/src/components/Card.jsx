import { useNavigate } from 'react-router-dom'
import styles from '../styles/Card.module.css'
function Card({id, name, image, continent}) {
    const navigate = useNavigate()    

    return (
        <div className={styles.container}>
            <h2 className= {styles.description}>{name}</h2>
            <img src={image} alt={name} onClick={() => navigate(`/detail/${id}`)} />
            <h2 className= {styles.description}>Continent: {continent}</h2>
        </div>
    );
}
 

export default Card

