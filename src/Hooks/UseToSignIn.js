import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../init';
const useToSignInWithThirdParty = () => {
    
    const navigate = useNavigate();
    // function = sign in with google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const createUserUsingGoogle = () => {
        signInWithGoogle();
        console.log("google user created")
        if (googleUser) {
            navigate("/services")
        }
    }
    // function = sign in with facebook
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const createuserUsingFacebook = () => {
        signInWithFacebook();
        console.log("facebook user created")
        if (facebookUser) {
            navigate("/service")
        }
    }
    return (
        {createUserUsingGoogle, createuserUsingFacebook}
    );
};

export default useToSignInWithThirdParty;