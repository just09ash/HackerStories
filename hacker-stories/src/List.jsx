import React from 'react'
import Item from './Item'

const List = ({list}) =>  {
    
    return (
        <>
            {
                list.map(
                    function ({objectID, ...item}) { // Here We used Rest Operator
                        return (
                            // <Item item={item} key={item.objectID}/> // One Way
                            // <Item url={item.url} title={item.title} author={item.author} num_comments={item.num_comments} points={item.points} key={item.objectID} />
                            // Above is Very Long Form
                             <Item {...item} key={objectID}/> // The Short Form: Spread Operator
                        )
                    }
                )
            }
        </>
    )
}

export default List
