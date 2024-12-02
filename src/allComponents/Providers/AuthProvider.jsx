import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const authContext = createContext()

const AuthProvider = ({ children }) => {


    //users create
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userSignIn = (email,password) =>{

        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        userSignUp,
        userSignIn


    }
    return (
        <authContext.Provider value={userInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;