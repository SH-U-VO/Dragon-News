import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const { createNewUser, user, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "must be more than 5 character" })
            return;
        }
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({ name, photo, email, password })

        createNewUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user:", user)
                setUser(user)
                updateUserProfile({ displayName: name, photoURL: photo }).then(() =>{navigate("/");}).catch(err => console.log(err))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log("error code:", errorCode)
                console.log("error message:", errorMessage)
            });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Register your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">

                            {/* Name Input */}
                            <label className="label">Your Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input"
                                placeholder="Enter your name"
                            />

                            {
                                error.name && (
                                    <label className="label text-sm text-red-600">
                                        {error.name}
                                    </label>
                                )
                            }
                            {/* Photo URL Input */}
                            <label className="label">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                className="input"
                                placeholder="Enter your photo URL"
                            />
                            {/* Email Input */}
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="email"
                            />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input
                                name='password'
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