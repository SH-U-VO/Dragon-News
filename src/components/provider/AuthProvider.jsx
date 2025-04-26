import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

    const logOut =() =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin
    }

   

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        });
        return () => { unsubscribe };
    }, [])

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;