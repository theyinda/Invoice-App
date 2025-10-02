// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "firebase/auth";
import {
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../services/firebase";

type AuthContextType = {
    user: User | null | undefined; // undefined while loading
    loading: boolean;
    logout: () => Promise<void>;
    signup: (email: string, password: string) => Promise<User>;
    login: (email: string, password: string) => Promise<User>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    const signup = async (email: string, password: string) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        return cred.user;
    };

    const login = async (email: string, password: string) => {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        return cred.user;
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout, signup, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
