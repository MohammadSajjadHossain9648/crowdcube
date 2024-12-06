import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const authContext = createContext();

const AuthProvider = ({route}) => {
    const handleToLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleToSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleToSignOut = () => {
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const handleToGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null);
            }
            setLoading(false);

            return () => {
                unsubscribe();
            }
        })
    })


    const authInfo = {handleToLogin, handleToSignUp, handleToSignOut, handleToGoogle, updateUser, user, setUser, loading, setLoading};


    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    route
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;