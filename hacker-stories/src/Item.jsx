import React from 'react'

function Item(props) {
    return (
        <>
            <ul >
                <li>
                    <a href={props.item.url}>{props.item.title}</a>
                </li>
                <li>{props.item.author}</li>
                <li>{props.item.num_comments}</li>
                <li>{props.item.points}</li>
            </ul>
        </>
    )
}

export default Item
