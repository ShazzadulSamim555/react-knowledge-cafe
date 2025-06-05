
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>

      <div className='md:flex md:gap-5 md:m-10'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
