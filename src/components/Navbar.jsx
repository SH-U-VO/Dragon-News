import userIcon from "../assets/user.png"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login'>
                <div className=" flex gap-2 items-center">
                    <img src={userIcon} alt="" />
                    <NavLink to={"/auth/login"} className="btn btn-neutral">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;