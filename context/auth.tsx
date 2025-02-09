"use client"

import { auth } from "@/firebase/client"
import { User } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"

type AuthContextType = { 
    currentUser: User | null}


const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvide = ({ children }:{
    children: React.ReactNode
}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user ?? null);
        });
        return ()=> unsubscribe();
    }, []);

    return (
    <AuthContext.Provider 
    value={{
        currentUser,
    }}
    >
        {children}
        
        </AuthContext.Provider>
        );
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}