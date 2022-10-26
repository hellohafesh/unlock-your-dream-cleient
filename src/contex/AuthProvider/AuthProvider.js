import React from 'react';
import { createContext } from 'react';
import { getAuth, updateProfile, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContex = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
    const googleProviderLogin = (provider) => {
        setLoading(false);
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (carentUser) => {
            setUser(carentUser);
            setLoading(false);
        });
        return () => {
            unsbscribe();
        }
    }, [])






    const allinfo = {
        user,
        loading,
        googleProviderLogin,
        logout,
        createUser,
        singIn,
        updateUserProfile,
        setLoading
    };



    return (
        <AuthContex.Provider value={allinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;