// importing modules
import React from 'react';
// importing components
import SignIn from '../../UI/signIn/signIn';
import SignUp from '../../UI/signUp/signUp';

const signInAndSignUpPage = () => (
    <div className="signUp-signIn">
        <SignIn />
        <SignUp />
    </div>
);

export default signInAndSignUpPage;
