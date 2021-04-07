import Notfound from 'components/NotFound/NotFound';
import { addUser } from 'features/Login/LoginSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import HomePage from './pages/HomePage';

Home.propTypes = {};

function Home(props) {
    const match = useRouteMatch();
    const url = match.url;
    const dispatch = useDispatch();
    const hasUser = useSelector(state => state.login[0]);
    if (!hasUser) {
        const user = {
            token: localStorage.getItem(process.env.REACT_APP_TOKEN_STORAGE),
            username: localStorage.getItem(process.env.REACT_APP_USERNAME_STORAGE),
        }
        dispatch(addUser(user));
    }

    return (
        <Switch>
            <Route path={`${url}`} component={HomePage} />
            <Route component={Notfound} />
        </Switch>
    )
}

export default Home;