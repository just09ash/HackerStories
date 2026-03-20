import { useEffect, useState } from 'react'
import List from './List.jsx';
import Search from './Search.jsx';


const stories = [
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


const App = () => {
  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) ?? initialState
    )
    useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value,setValue]
  }

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React')



  useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchedStories)
  }

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <Search onSearch={handleSearch} search={searchTerm} />
        <hr />
        <List list={stories} />
      </div>
    </>
  )
}

export default App
