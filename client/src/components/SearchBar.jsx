import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCountries } from '../redux/actions'
const SearchBar = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const handleSearch = (event) => {
        
        event.preventDefault()
        dispatch(searchCountries(query))
    }

    return (
        <div onSubmit={handleSearch}>
            <input
                type='search'
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                placeholder="¿Qué desea buscar?" />
            <button>buscar</button>
        </div>
    )
}

export default SearchBar