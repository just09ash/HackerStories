import { useState } from 'react'

const Search = (props) => {
    const handleChange = (event) => {
        props.onSearch(event)
    }
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
            <br />
        </div>
    )
}

export default Search
