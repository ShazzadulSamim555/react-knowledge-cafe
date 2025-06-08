
const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 p-5 rounded-lg mb-5">
            <h3 className="text-2xl font-bold">{bookmark.title}</h3>
        </div>
    );
};

export default Bookmark;