import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleAddToBookmarks,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog=> <Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks} blog={blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;