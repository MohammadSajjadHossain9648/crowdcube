import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);

    if(loading){
        return <h2>Loading...</h2>
    }

    const location = useLocation();
    if(!user){
        return <Navigate state={{from:location.pathname}} to={'/LogIn'}></Navigate>
    }

    return children;
};

export default PrivateRoute;