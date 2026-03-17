import { useState } from 'react'
import List from './List.jsx';
import Search from './Search.jsx';
function App() {


  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <Search />
        <hr />
        <List />
      </div>
    </>
  )
}

export default App
