import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loading from 'components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';
import React, { Suspense } from 'react';
import { PublicRoute } from 'PublicRoute';
import PrivateRoute from 'PrivateRoute';
//Lazy loading:
const LoginPage = React.lazy(() => import('./features/Login'));
const RegisterPage = React.lazy(() => import('./features/Register'));
const HomePage = React.lazy(() => import('./features/Home'));
const ProfilePage = React.lazy(() => import('./features/Profile'));
const InboxPage = React.lazy(() => import('./features/Inbox'));


function App() {
  return (
    <div className="my-moments">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage}/>
            <PublicRoute exact path="/login" component={LoginPage}/>
            <PublicRoute exact path="/register" component={RegisterPage}/>
            <PrivateRoute exact path="/inbox" component={InboxPage}/>
            <PrivateRoute exact path="/explore" component={NotFound}/>
            <PrivateRoute exact path="/favourite" component={NotFound}/>
            <PrivateRoute exact path="/:user" component={ProfilePage}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
