
const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    const imageList=[1,2,3,4,5];
    const {id,title,cover,author,author_img,posted_date,hashtag,reading_time}=blog;

   
    return (
        <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  p-5 flex flex-col gap-y-2">

            {/* {imageList.map((num, index) => (
               <img
                
                src={`/src/assets/${num}.jpg`}
                alt={`Image ${num}`}
                style={{ width: '600px', margin: '10px' }}
               />
            ))} */}
            <img className="w-full my-5 rounded-lg" src={cover} alt={`Cover Picture of the title ${title}`} />

            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="w-9 rounded-full" src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl">{author}</h4>
                        <p className="text-xs">{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <h1>{reading_time}</h1>
                    <button onClick={() => handleAddToBookmarks(blog)}><img className="w-6 h-6" src="https://img.icons8.com/?size=80&id=cMGn5OSRI9br&format=gif" alt="" /></button>
                </div>
            </div>

            <h3 className="text-2xl font-bold">{title}</h3>

            <p>{hashtag}</p>

            <button onClick={( ) =>handleMarkAsRead(reading_time)} className="text-blue-600 underline">Mark as read</button>
            
        </div>
    );
};

export default Blog;