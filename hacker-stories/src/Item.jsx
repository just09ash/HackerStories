import React from 'react'

function Item({ item, onRemoveItem }) {
    return (
        <>
            <ul >
                <li>
                    <a href={item.url}>{item.title}</a>
                </li>
                <li>{item.author}</li>
                <li>{item.num_comments}</li>
                <li>{item.points}</li>
                <button type="button" onClick={() => onRemoveItem(item)}>
                    Dismiss
                </button>
            </ul>
        </>
    )
}

export default Item
