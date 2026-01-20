"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ApiRoutes } from "@/constants/ApiRoutes";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetch(ApiRoutes.AUTH.ME);
                if (!res.ok) throw new Error("Not logged in");
                const data = await res.json();
                setUser(data.user);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getMe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);