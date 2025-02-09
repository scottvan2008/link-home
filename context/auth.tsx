"use client";

import { auth } from "@/firebase/client";
import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    currentUser: User | null;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvide = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user ?? null);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await auth.signOut();
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
