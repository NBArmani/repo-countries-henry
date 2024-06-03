import { useNavigate } from 'react-router-dom'
function Card({id, name, image, continent}) {
    const navigate = useNavigate()    

    return (
        <div className='country'>
            <h2>{name}</h2>
            <img src={image} alt={name} onClick={() => navigate(`/detail/${id}`)} />
            <h2>Continent: {continent}</h2>
        </div>
    );
}
 

export default Card

