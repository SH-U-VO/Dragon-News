import { useContext } from "react";
import userIcon from "../assets/user.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "./provider/AuthProvider";

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login'>
                <div className=" flex gap-2 items-center">
                    <img src={userIcon} alt="" />

                    {
                        user && user?.email ? <NavLink
                        onClick={logOut}
                        to="/auth/login"
                        className={({ isActive }) =>
                            `btn btn-neutral ${isActive ? "bg-black text-white" : ""}`
                        }
                    >
                        Log Out
                    </NavLink>:<NavLink
                        to="/auth/login"
                        className={({ isActive }) =>
                            `btn btn-neutral ${isActive ? "bg-black text-white" : ""}`
                        }
                    >
                        Login
                    </NavLink>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;