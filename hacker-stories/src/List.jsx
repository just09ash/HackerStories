import React from 'react'
import Item from './Item'

const List = (props) =>  {
    
    return (
        <>
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
