import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, filterByContinent } from "../redux/actions";
import Nav from "./Nav";
import Pagination from './Pagination';
import styles from '../styles/Home.module.css'
const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const handleContinentSearch = (event) => {
        const continent = event.target.value;
        if (continent === 'all') {
            setFilteredCountries(countries);
        } else {
            dispatch(filterByContinent(continent));
        }
    };

    const handleSearchResults = (results) => {
        setFilteredCountries(results);
    };

    // Crear un Set para evitar duplicados y luego convertirlo en un array
    const continents = Array.from(new Set(countries.map(country => country.continent)));

    return (
        <div className={styles.App}>
            <Nav onSearchResults={handleSearchResults} />
            <select name="continent" onChange={handleContinentSearch}>
                <option value="all">Todos los continentes</option>
                {continents.map((continent, index) => (
                    <option value={continent} key={index}>{continent}</option>
                ))}
            </select>
            <Cards countries={filteredCountries.length ? filteredCountries : countries} />
            <Pagination />
        </div>
    );
};

export default Home;