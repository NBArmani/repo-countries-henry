import { useState, useEffect } from 'react'
import Validation from './Validation'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from '../../redux/actions'
import { Link } from 'react-router-dom'

const Form = () => {
    const dispatch = useDispatch()
    const availableCountries = useSelector(state => state.countries)

    const [formData, setFormData] = useState({
        name: '',
        difficulty: '',
        season: '',
        country: [],
        duration: '',
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'select-multiple') {
            const options = event.target.options;
            const values = [];
            for (let i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    values.push(options[i].value);
                }
            }
            setFormData({ ...formData, [name]: values });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const validationErrors = Validation(formData)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            dispatch(postActivity(formData))
            alert('¡Gracias por enviarnos tu actividad!')
            setFormData({
                name: '',
                difficulty: '',
                season: '',
                country: [],
                duration: ''
            })
            setErrors({})
        }
    }
 console.log('available countries: ',availableCountries)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Ingresa la actividad que desees realizar:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </label>
            </div>

            <div>
                <label>¿Cuál es la dificultad? Selecciona del 1 al 5:</label>
                {[1, 2, 3, 4, 5].map((level) => (
                    <label key={level}>
                        <input
                            type="radio"
                            name="difficulty"
                            value={level}
                            checked={parseInt(formData.difficulty) === level}
                            onChange={handleChange}
                        />
                        {`${['Muy fácil', 'Fácil', 'Intermedio', 'Difícil', 'Muy difícil'][level - 1]}`} {Array(level).fill('⭐').join('')}
                    </label>
                ))}
                {errors.difficulty && <span>{errors.difficulty}</span>}
            </div>

            <div>
                <label>Selecciona la temporada:</label>
                <select
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                >
                    <option value="">Selecciona una temporada</option>
                    {['Verano', 'Otoño', 'Invierno', 'Primavera'].map((season) => (
                        <option key={season} value={season}>
                            {season}
                        </option>
                    ))}
                </select>
                {errors.season && <span>{errors.season}</span>}
            </div>

            <div>
                <label>¿Cuánto dura la actividad (en horas)?</label>
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min="1"
                    max="24"
                />
                {errors.duration && <span >{errors.duration}</span>}
            </div>

            <div>
                <label>Selecciona el país donde se puede realizar:</label>
                <select 
                name="country" 
                value= {formData.country}
                onChange={handleChange}
                multiple
                >
                    <option value=""> Seleccione al menos un país</option>
                    {availableCountries.map(country => (
                        <option key = {country.id} value={country.id} >{country.name}</option>
                    ))}
                </select>
                {errors && errors.country && <span >{errors.country}</span>}
            </div>

            <div>
                <button type="submit">¡Déjanos saber tu actividad!</button>
                <Link to='/home'>
                    <button>Volver</button>
                </Link>
            </div>
        </form>
    )
}

export default Form
