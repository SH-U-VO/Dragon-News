import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Register your Account</h2>
                <div className="card-body">
                    <form action="">
                        <fieldset className="fieldset">

                            {/* Name Input */}
                            <label className="label">Your Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter your name"
                            />
                            {/* Photo URL Input */}
                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter your photo URL"
                            />
                            {/* Email Input */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="URL"
                            />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input 
                            type="password" 
                            className="input" 
                            placeholder="Password" 
                            />
                            
                            <button className="btn btn-neutral mt-4 rounded-none">Register</button>
                        </fieldset>
                    </form>
                    <p className='text-center font-semibold'>Already Have An Account ? <Link className='text-red-400' to={"/auth/login"}>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;