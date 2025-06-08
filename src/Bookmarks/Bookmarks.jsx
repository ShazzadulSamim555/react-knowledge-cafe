import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="md:w-1/3 p-7 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg">
            <h3 className="text-3xl font-bold text-gray-500 bg-slate-200 p-5 rounded-lg text-center mb-5 ">Spent Time on Read: {readingTime}</h3>
            <div className="">
                <h4 className="text-3xl font-bold mb-5">Bookmark Blog: {bookmarks.length}</h4>

               {
                  bookmarks.map((bookmark) => <Bookmark bookmark={bookmark}></Bookmark>)
               }
            </div>
        </div>
    );
};

export default Bookmarks;