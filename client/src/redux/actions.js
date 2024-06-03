import {
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION,
    GET_COUNTRIES,
    GET_DETAIL,
    SEARCH_COUNTRIES,
    POST_ACTIVITY,
    GET_ACTIVITIES,
    SET_CURRENT_PAGE,
    SET_ITEMS_PER_PAGE,
    TOTAL_PAGES
} from './actions-type'
import axios from 'axios'


const COUNTRIES_PER_PAGE = 10

const getCountries = () => {
    const endpoint = 'http://localhost:3001/countries'
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)
            dispatch({
                type: GET_COUNTRIES,
                payload: data
            })
            dispatch({
                type: TOTAL_PAGES,
                payload: Math.ceil(data.length / COUNTRIES_PER_PAGE)
            })
            dispatch(setItemsPerPage(data.slice(0, COUNTRIES_PER_PAGE)))
            dispatch(setCurrentPage(1))
        } catch (error) {
            console.log(error)
        }
    }

}

const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`);
            dispatch({
                type: GET_DETAIL,
                payload: response.data
            });
        } catch (error) {
            console.log('WARNING. Error al obtener los detalles: ', error);
        }
    };
};

const searchCountries = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`)
            dispatch({
                type: SEARCH_COUNTRIES,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const postActivity = (activity) => {
    const endpoint = 'http://localhost:3001/activities'
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, activity)

            return dispatch({
                type: POST_ACTIVITY,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


const getActivities = () => {
    const endpoint = 'http://localhost:3001/activities'
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: GET_ACTIVITIES,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}


const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}

const orderByAlphabet = (order) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload: order
    }
}

const orderByPopulation = (order) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: order
    }
}


const setCurrentPage = (page) => (dispatch, getState) => {
    const { filteredCountries } = getState();
    const startIndex = (page - 1) * COUNTRIES_PER_PAGE;
    const items = filteredCountries.slice(startIndex, startIndex + COUNTRIES_PER_PAGE);

    dispatch({
        type: SET_CURRENT_PAGE,
        payload: page
    });
    dispatch({
        type: SET_ITEMS_PER_PAGE,
        payload: items
    });
};


const setItemsPerPage = (items) => {
    return {
        type: SET_ITEMS_PER_PAGE,
        payload: items
    }
}


export { getCountries, getDetail, searchCountries, postActivity, getActivities, filterByActivity, filterByContinent, orderByAlphabet, orderByPopulation, setCurrentPage }