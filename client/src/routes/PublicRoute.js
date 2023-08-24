import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    const user = localStorage.getItem('token')
    if (user) {
        return true
    } else {
        return false
    }
}

const PublicRoutes = ({ children }) => {
    const auth = useAuth()

    return auth ? <Navigate to="/dashboard" /> : children
}

export default PublicRoutes;