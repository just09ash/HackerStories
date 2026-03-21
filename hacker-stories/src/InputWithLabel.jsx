import { useRef, useEffect } from 'react'

const InputWithLabel = ({search, onSearch, id, type = 'text', isFocused, children}) => {
    const inputRef = useRef()

    useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

    const handleChange = (event) => {
        onSearch(event)
    }
    return (
        <>
            <div>
                <label htmlFor={id}>{children}&nbsp;</label>
                <input ref={inputRef} id={id} type={type} onChange={handleChange} value={search} />
                <br />
            </div>
        </>
    )
}

export default InputWithLabel
