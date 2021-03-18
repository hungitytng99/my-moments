import Notfound from 'components/NotFound/NotFound';
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';

Register.propTypes = {};

function Register() {
    const match = useRouteMatch();
    const url = match.url;
    return(
        <Switch>
            <Route path={url} component={RegisterPage}/>
            <Route component={Notfound}/>
        </Switch>
    )
}
export default Register;