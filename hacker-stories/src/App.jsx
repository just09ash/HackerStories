import { useState } from 'react'

function App() {
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
      <div>
        <h1>My Hacker Stories</h1>
        {list.map(
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
        )}
      </div>
    </>
  )
}

export default App
