// importing modules
import React, { Component } from 'react';
import {
 BrowserRouter, Route, Switch 
} from 'react-router-dom';

// importing components
import Header from '../components/UI/header/Header';
import HomePage from '../components/pages/homePage/HomePage'; 
import ShopPage from '../components/pages/shopPage/ShopPage';
import SignInAndSignUpPage from '../components/pages/signInAndSignUpPage/SignInAndSignUpPage';
import { auth } from '../firebase/firebase.utils';

class AppRouter extends Component {
    unsubscribeFromAuth = null;
    
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const routes = (
            <Switch>   
            <Route
              path="/"
              exact
              render={() => (
                    <HomePage />
            )} 
            />
            <Route
              path="/shop"
              exact
              render={() => (
                    <ShopPage />
            )} 
            />
            <Route
              path="/signin"
              exact
              render={() => (
                    <SignInAndSignUpPage />
            )} 
            />
            </Switch>
        );
        return (
                <BrowserRouter>
                    <div>
                        <Header currentUser={this.state.currentUser} />
                        {routes}
                    </div>
                </BrowserRouter>
                );
    }
}

export default AppRouter;
