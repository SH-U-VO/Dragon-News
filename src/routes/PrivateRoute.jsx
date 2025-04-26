import React, { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Page/Loading';

const PrivateRoute = ({ children }) => {
const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <Loading />
    }
    if (user && user?.email){
        return children;
    }

        return <Navigate state={location.pathname} to={`/auth/login`}></Navigate>
};

export default PrivateRoute;