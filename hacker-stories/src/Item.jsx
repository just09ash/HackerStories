import React from 'react'

function Item({url, title, author, num_comments, points}) {
    return (
        <>
            <ul >
                <li>
                    <a href={url}>{title}</a>
                </li>
                <li>{author}</li>
                <li>{num_comments}</li>
                <li>{points}</li>
            </ul>
        </>
    )
}

export default Item
