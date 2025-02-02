import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate , useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const user = useSelector( state => state.user);
    let location = useLocation();

    if(!user.state.isAuthenticated){
        return <Navigate to="/" state={{from:location}} replace/>
    }
    return children;
};


export default ProtectedRoute;