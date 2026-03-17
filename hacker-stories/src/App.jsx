import { useState } from 'react'

function App() {
  function add2Num(n1,n2) 
  {
    return n1 + n2;
  }
  return (
    <>
      <h1>{add2Num(10,20)}</h1>
    </>
  )
}

export default App
