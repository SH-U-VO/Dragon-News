import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';



const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        userLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                form.reset();
            })
            .catch((error) => {
                alert(error.code);
            }); 
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Password"
                            />

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