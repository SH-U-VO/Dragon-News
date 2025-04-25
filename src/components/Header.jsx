import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    const formatted = moment().format('dddd, MMMM D, YYYY - hh:mm:ss A');
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className='logo'>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400 '>Journalism Without Fear or Favour</h2>
            {
                formatted
            }


        </div>
    );
};

export default Header;