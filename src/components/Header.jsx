import profile from '../assets/profile.png'

const Header = () => {
    return (
        <div>
            <div className='flex mx-10 justify-between p-5 border-b-2'>
               <h1 className="text-4xl font-bold">Knowledge cafe</h1>
               <img className='w-10 h-10' src={profile} alt="" />
            </div>
            
        </div>
        
    );
};

export default Header;