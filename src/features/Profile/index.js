import Notfound from 'components/NotFound/NotFound';
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage';

Profile.propTypes = {};

function Profile(props) {
    const match = useRouteMatch();
    const url = match.url;
    return(
        <Switch>
            <Route path={`${url}`} component={ProfilePage}/>
            <Route component={Notfound}/>
        </Switch>
    )
}

export default Profile;