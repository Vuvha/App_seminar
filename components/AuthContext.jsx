import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setCredentials = (newEmail, newPassword) => {
        setEmail(newEmail);
        setPassword(newPassword);
    }

    return (
        <AuthContext.Provider value={{email, password, setCredentials, isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => {
    return useContext(AuthContext)
}

export  { AuthProvider, useAuth }