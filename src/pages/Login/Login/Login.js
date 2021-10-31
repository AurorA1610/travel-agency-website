import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInWithGoogle().then(result => {
            history.push(redirectUri);
        })
    }
    return (
        <div>
            <h2 className="mt-5 mb-5">Please Login</h2>
            <Button onClick={ handleGoogleLogin } variant="warning" className="px-5 m-5">Sign In With Google</Button>
        </div>
    );
};

export default Login;