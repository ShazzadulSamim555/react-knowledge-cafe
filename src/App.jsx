
import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import Header from './components/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    //console.log(blog);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time,id) => {
    //console.log('Mark as read',time);
    const newReadingTime = (readingTime) + (time);
    setReadingTime(newReadingTime);
    //console.log('remove bookmark',id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  

  return (
    <>
      <Header></Header>

      <div className='md:flex md:gap-5 md:m-10'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
