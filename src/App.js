import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loading from 'components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';
import React, { Suspense } from 'react';
//Lazy loading:
const LoginPage = React.lazy(() => import('./features/Login'));
const RegisterPage = React.lazy(() => import('./features/Register'));

function App() {
  return (
    <div className="my-moments">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
