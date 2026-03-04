import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthProvider ({ children, user }) {
    const [user, setUser] = useState(null);
    
    const login = () => setUser(user);
    const logout = () => setUser(null);

    return (
        <authContext.Provider value={{ user, login, logout }}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => useContext(authContext);