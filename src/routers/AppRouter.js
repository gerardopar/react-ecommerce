// importing modules
import React from 'react';
import {
 BrowserRouter, Route, Switch 
} from 'react-router-dom';

// importing components
import HomePage from '../components/pages/homePage/HomePage'; 
import ShopPage from '../components/pages/shopPage/ShopPage';

const appRouter = () => {
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
            </Switch>
        );

        return (
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>
        );
};

export default appRouter;
