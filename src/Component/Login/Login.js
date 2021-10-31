import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    return (
        <div>
            <h2>please log in</h2>
            <Button onClick ={signInUsingGoogle} variant="warning" active>
               Google sign in
            </Button>

        </div>
    );
};

export default Login;