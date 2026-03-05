import { createContext, useContext, useState, useMemo } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(() => {
        try {
            const stored = localStorage.getItem("auth");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }

    });

    const login = (userData, token) => {
        const authData = { user: userData, token };
        setAuth(authData);
        localStorage.setItem("auth", JSON.stringify(authData));
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem("auth");
    };

    const value = useMemo(() => ({
        auth,
        login,
        logout,
        // isAuthenticated: !!auth?.token,
    }), [auth]);

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => useContext(authContext);