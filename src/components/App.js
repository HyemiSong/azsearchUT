import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './home';
import Profile from './Profile';
import { signIn } from './auth';
import AuthRoute from './AuthRoute';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';


function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <header>
        <Link to ="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>azsearch.js</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
        </Switch>
      </main>
    </Router>
  );
}
export default App;
