import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    
    const login = () => setUser({ name: "GreatestStrongestBBC" });
    const logout = () => setUser(null);

    return (
        <authContext.Provider value={{ user, login, logout }}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => useContext(authContext);