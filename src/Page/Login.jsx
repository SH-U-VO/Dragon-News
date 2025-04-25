import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your Account</h2>
                <div className="card-body">
                    <form action="">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center font-semibold'>Dont’t Have An Account ? <Link className='text-red-400' to={"/auth/register"}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;