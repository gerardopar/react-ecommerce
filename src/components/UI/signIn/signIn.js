// importing modules
import React, { Component } from 'react';
// importing components
import FormInput from '../../forms/formInput';
import CustomButton from '../../forms/customButton';
// importing firebase services
import { signInWithGoogle } from '../../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
    }

    handleOnChange = (e) => {
        const { value, name } = e.target; // destructors the name and value from the input onChange
        this.setState({ [name]: value }); // updates the state based on the inputs name
    }

    render() {
        return (
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput  
                      type="email" 
                      name="email" 
                      value={this.state.email} 
                      handleOnChange={this.handleOnChange}
                      label="email"
                      autoComplete="off"
                      required
                    />
                    <FormInput 
                      type="password" 
                      name="password" 
                      value={this.state.password} 
                      handleOnChange={this.handleOnChange}
                      label="password"
                      autoComplete="off"
                      required
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
