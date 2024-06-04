import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, getCountries, filterByContinent, getActivities, orderByAlphabet, orderByPopulation } from '../redux/actions';
import { useEffect, useState } from "react";
import styles from '../styles/Nav.module.css'

const Nav = ({ onSearchResults }) => { // Agregamos la función de devolución de llamada onSearchResults
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    const countries = useSelector((state) => state.countries);
    const [searchValue, setSearchValue] = useState("");
    const [filterContinent, setFilterContinent] = useState("all");
    const [filterActivity, setFilterActivity] = useState("all");
    const [orderByAlphabetValue, setOrderByAlphabetValue] = useState("all");
    const [orderByPopulationValue, setOrderByPopulationValue] = useState("all");

    useEffect(() => {
        dispatch(getActivities());
        dispatch(getCountries());
    }, [dispatch]);

    const handleFilterByContinent = (event) => {
        const value = event.target.value;
        dispatch(filterByContinent(value === "all" ? "" : value));
        setFilterContinent(value);
    };
    
    const handleFilterByActivity = (event) => {
        const value = event.target.value;
        setFilterActivity(value);
        dispatch(filterByActivity(value === "all" ? "" : value));
    };
    
    const handleOrderByAlphabet = (event) => {
        const value = event.target.value;
        setOrderByAlphabetValue(value);
        dispatch(orderByAlphabet(value === "all" ? "" : value));
    };

    const handleOrderByPopulation = (event) => {
        const value = event.target.value;
        setOrderByPopulationValue(value);
        dispatch(orderByPopulation(value === "all" ? "" : value));
    };

    const handleSearch = (value) => {
        setSearchValue(value);
        setFilterContinent("all"); // Restablecemos el filtro de continente
        setFilterActivity("all"); // Restablecemos el filtro de actividad
        setOrderByAlphabetValue("all"); // Restablecemos el orden alfabético
        setOrderByPopulationValue("all"); // Restablecemos el orden por población
        onSearchResults([]); // Restablecemos los resultados de la búsqueda
    };

    return (
        <div>
            <div>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div>
                <select name="continent" value={filterContinent} onChange={handleFilterByContinent} className={styles.sel_item}>
                    <option value="all">Todos los continentes</option>
                    <option value="Africa">África</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceanía</option>
                </select>
            </div>

            <div>
                <select name="activity" value={filterActivity} onChange={handleFilterByActivity} className={styles.sel_item}>
                    <option value="all">Todas las actividades</option>
                    {activities.map((activity) => (
                        <option key={activity.id} value={activity.name}>{activity.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <select value={orderByAlphabetValue} onChange={handleOrderByAlphabet} className={styles.sel_item}>
                    <option value="all">Ordenar alfabéticamente</option>
                    <option value="asc">De la A a la Z</option>
                    <option value="desc">De la Z a la A</option>
                </select>
            </div>

            <div>
                <select value={orderByPopulationValue} onChange={handleOrderByPopulation} className={styles.sel_item}>
                    <option value="all">Ordenar por población</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>

            <Link to='/crea-tu-actividad'>
                <button>¡Crea tu actividad!</button>
            </Link>
        </div>
    );
};

export default Nav;