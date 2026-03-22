import { useEffect, useState } from 'react'
import List from './List.jsx';
import InputWithLabel from './InputWithLabel.jsx';


const initialStories = [
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
const getAsyncStories = () =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { stories: initialStories } }),
      2000
    )
  )

const App = () => {
  const [stories, setStories] = useState([])
  
  useEffect(() => {
    getAsyncStories().then((result) => {
      setStories(result.data.stories);
    });
  }, []);



  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) ?? initialState
    )
    useEffect(() => {
      localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
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

  const handleRemoveStory = (item) => {
    const newstories = stories.filter(
      (story) => item.objectID !== story.objectID
    )
    setStories(newstories)
  }
  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <InputWithLabel id="search" type="text" onSearch={handleSearch} search={searchTerm} isFocused={true}>
          Search:
        </InputWithLabel>
        <hr />
        <List list={stories} onRemoveItem={handleRemoveStory} />
      </div>
    </>
  )
}

export default App
