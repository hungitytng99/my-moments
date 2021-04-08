import AuthHelper from 'helpers/AuthHelper';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
       AuthHelper.getAndConfirmToken()
            ?<Redirect to={{ pathname: '/', state: { from: props.location } }} />
            :<Component {...props} />)} 
        />
)
//thieu veryfy token