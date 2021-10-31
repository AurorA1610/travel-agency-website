import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // observing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // logging out
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => { }).finally(() => setIsLoading(false));
    };

    return {
        user,
        isLoading,
        signInWithGoogle,
        logout
    };
};

export default useFirebase;