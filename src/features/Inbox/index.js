import Notfound from 'components/NotFound/NotFound';
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import InboxPage from './pages/InboxPage';

Home.propTypes = {};

function Home(props) {
    const match = useRouteMatch();
    const url = match.url;
    return(
        <Switch>
            <Route path={`${url}`} component={InboxPage} />
            <Route component={Notfound}/>
        </Switch>
    )
}

export default Home;