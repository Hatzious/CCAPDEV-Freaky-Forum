import { createContext, useContext, useState, useEffect } from "react";
import { API_BASE } from "../Services/api";

const authContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE}/Auth/me`, { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                console.log("Miku miku beaaaaaaaaaam: " + data);
                if (data.loggedIn) setUser(data.user);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        const request = await fetch(`${API_BASE}/Auth/logout`, {
            method: "POST",
            credentials: "include"
        })
        const data = await request.json();
        console.log("Logout message: " + data.message);
        setUser(null);
    };

    if (loading) return <div className="bg-black h-screen text-glow">Verifying Archive Access...</div>;

    return (
        <authContext.Provider value={{ user, login, logout }}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => useContext(authContext);