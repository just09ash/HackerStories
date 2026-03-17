import { useState } from 'react'

const ComponentDontNeedThis = "Reactor";

function App() {
  const ComponentNeedsThis = "Wow!";
  return (
    <>
      <h1>Hacker Stories</h1>
      <h2>{ComponentDontNeedThis}</h2>
      <h2>{ComponentNeedsThis}</h2>
    </>
  )
}

export default App
