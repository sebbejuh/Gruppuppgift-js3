import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const localStorageObject = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(localStorageObject?.token || null);

    const updateToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", JSON.stringify(newToken));
    };

    return <AuthContext.Provider value={{ token, updateToken }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
