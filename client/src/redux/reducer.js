import {
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION,
    GET_COUNTRIES,
    GET_DETAIL,
    POST_ACTIVITY,
    GET_ACTIVITIES,
    SET_CURRENT_PAGE,
    SET_ITEMS_PER_PAGE,
    TOTAL_PAGES,
    SEARCH_COUNTRIES
} from './actions-type'

const initialState = {
    countries: [],
    activities: [],
    filteredCountries: [],
    currentPage: 1,
    totalPages: 1,
    items: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload
            }
        }

        case GET_DETAIL: {
            return {
                ...state,
                detail: action.payload
            }
        }

        case SEARCH_COUNTRIES: {
            return {
                ...state,
                filteredCountries:action.payload
            }
        }

        case POST_ACTIVITY: {
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        }
        case GET_ACTIVITIES: {
            return {
                ...state,
                activities: action.payload
            }
        }

        case FILTER_BY_ACTIVITY: {
            const filteredByActivity = state.countries.filter(country => country.activities.includes(action.payload))
            return {
                ...state,
                filteredCountries: filteredByActivity
            }
        }
        case FILTER_BY_CONTINENT: {
            const filteredByContinent = state.countries.filter(country => country.continent.includes(action.payload))
            return {
                ...state,
                filteredCountries: filteredByContinent
            }
        }


        case ORDER_BY_ALPHABET: {
            const sortedAlphabetically = [...state.filteredCountries].sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.name.localeCompare(b.name)
                } else {
                    return b.name.localeCompare(a.name)
                }
            })

            return {
                ...state,
                filteredCountries: sortedAlphabetically
            }
        }

        case ORDER_BY_POPULATION: {
            const sortedByPopulation = [...state.filteredCountries].sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.population - b.population
                } else {
                    return b.population - a.population
                }
            })

            return {
                ...state,
                filteredCountries: sortedByPopulation
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case SET_ITEMS_PER_PAGE: {
            return {
                ...state,
                items: action.payload
            }

        }

        case TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.payload
            }
        }
        default:
            return state
    }
}

export default rootReducer