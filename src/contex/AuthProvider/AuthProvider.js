import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContex = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (carentUser) => {
            setUser(carentUser);
        });
        return () => {
            unsbscribe();
        }
    }, [])






    const allinfo = { user, googleProviderLogin, logout, createUser, singIn };



    return (
        <AuthContex.Provider value={allinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;