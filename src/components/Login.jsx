import React, { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../Initializers/firebase-Config";
import InstagramContent from './instagram-content/layout/InstagramContent';
import InstagramHeader from "./header/Layout/InstagramHeader"
import RecommendedLayout from './instagram-content/components/Recommended/Layout/RecommendedLayout';

const Login = () => {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                return setIsUserSignedIn(true);
            } else {
                return setIsUserSignedIn(false);
            }
        });
    }, [])
    

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    if (isUserSignedIn) {
        return (
            <div>
                <InstagramHeader/>
                <InstagramContent/>
                <RecommendedLayout />
            </div>

        );
    }

    else {
        return (
            <button onClick={() => { signIn() }}>
                Sign In with Google
            </button>
        );

    }


};

export default Login;