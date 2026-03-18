import React from 'react'

const Search = () => {
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
        </div>
    )
}

export default Search
