import { useState } from 'react'

const InputWithLabel = ({search, onSearch, id, type = 'text', label}) => {
    const handleChange = (event) => {
        onSearch(event)
    }
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} onChange={handleChange} value={search} />
                <br />
            </div>
        </>
    )
}

export default InputWithLabel
