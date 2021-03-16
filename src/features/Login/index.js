import Notfound from 'components/NotFound/NotFound';
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';

Login.propTypes = {};

function Login(props) {
    const match = useRouteMatch();
    const url = match.url;
    console.log(url);
    return(
        <Switch>
            <Route path={`${url}`} component={LoginPage}/>
            <Route component={Notfound}/>
        </Switch>
    )
}

export default Login;