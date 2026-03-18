import React from 'react'

const List = () =>  {
    const list = [
    {
      title: "React",
      url: "https://react.dev",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];
    return (
        <>
        <h2>Following Are List of Stories: </h2>
            {
                list.map(
                    function (item) {
                        return (
                            <ul key={item.objectID}>
                                <li>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                                <li>{item.author}</li>
                                <li>{item.num_comments}</li>
                                <li>{item.points}</li>
                            </ul>
                        )
                    }
                )
            }
        </>
    )
}

export default List
