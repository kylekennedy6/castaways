import React, { Suspense } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';

import Auth from '../src/user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserHome from '../src/user/pages/Auth'
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import { AuthContext} from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
  const { token, login, logout, userId } = useAuth();
  
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <h2>HOME</h2> />
        </Route>
        <Redirect to='/' exact />
      </Switch>

    );
  } else {
    routes = (
      <Switch>
        <Route path="/login" exact>
          <Auth />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login, 
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense 
          fallback={
            <div className="center">
              <LoadingSpinner />
              </div>
            }
            >
              {routes}
              </Suspense>
            </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;