import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries } from "../redux/actions";
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


    const handleSearchResults = (results) => {
        setFilteredCountries(results);
    };


   

    return (
        <div className={styles.App}>
            <Nav onSearchResults={handleSearchResults} />
            <Cards countries={filteredCountries.length ? filteredCountries : countries} />
            <Pagination />
        </div>
    );
};

export default Home;