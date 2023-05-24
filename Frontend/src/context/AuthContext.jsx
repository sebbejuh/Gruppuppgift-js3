import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const localStorageObject = JSON.parse(localStorage.getItem("token"));

    //access token or setToken, if there is Token in localStorage will set Token to Token otherwise will to Null;
    const [token, setToken] = useState(localStorageObject || null);

    //update token function that can SET or Remove Token
    const updateToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", JSON.stringify(newToken));
    };

    return <AuthContext.Provider value={{ token, updateToken }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
