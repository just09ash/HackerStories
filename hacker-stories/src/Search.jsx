import { useState } from 'react'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        props.onSearch(event);
    };
    return (
        <div>
            <label>Search: </label>
            <input value={searchTerm} onChange={handleChange} />
        </div>
    )
}

export default Search
