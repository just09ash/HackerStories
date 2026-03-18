import { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    }
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
            <br />
            <h2>Searching for <i>{searchTerm}</i></h2>
        </div>
    )
}

export default Search
