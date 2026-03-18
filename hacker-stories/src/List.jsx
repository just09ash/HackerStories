import React from 'react'
import Item from './Item'

const List = (props) =>  {
    
    return (
        <>
        <h2>Following Are List of Stories: </h2>
            {
                props.list.map(
                    function (item) {
                        return (
                            <Item item={item} key={item.objectID}/>
                        )
                    }
                )
            }
        </>
    )
}

export default List
