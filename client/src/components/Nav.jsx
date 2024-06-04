import  { useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, filterByContinent, getActivities, getCountries, orderByAlphabet, orderByPopulation } from '../redux/actions';
import styles from '../styles/Nav.module.css';

const Nav = () => {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    const countries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getActivities());
        dispatch(getCountries());
    }, [dispatch]);

    const continents = Array.from(new Set(countries.map(country => country.continent)));

    const handleFilterByContinent = (event) => {
        dispatch(filterByContinent(event.target.value === "all" ? "" : event.target.value));
    };

    const handleFilterByActivity = (event) => {
        dispatch(filterByActivity(event.target.value === "all" ? "" : event.target.value));
    };

    const handleOrderByAlphabet = (event) => {
        dispatch(orderByAlphabet(event.target.value === "all" ? "" : event.target.value));
    };

    const handleOrderByPopulation = (event) => {
        dispatch(orderByPopulation(event.target.value === "all" ? "" : event.target.value));
    };

    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <select name="continent" onChange={handleFilterByContinent} className={styles.sel_item}>
                    <option value="all">Todos los continentes</option>
                    {continents.map((continent, index) => (
                        <option value={continent} key={index}>{continent}</option>
                    ))}
                </select>
            </div>
            <div>
                <select name="activity" onChange={handleFilterByActivity} className={styles.sel_item}>
                    <option value="all">Todas las actividades</option>
                    {activities.map((activity) => (
                        <option key={activity.id} value={activity.name}>{activity.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <select onChange={handleOrderByAlphabet} className={styles.sel_item}>
                    <option value="all">Ordenar alfabéticamente</option>
                    <option value="asc">De la A a la Z</option>
                    <option value="desc">De la Z a la A</option>
                </select>
            </div>
            <div>
                <select onChange={handleOrderByPopulation} className={styles.sel_item}>
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