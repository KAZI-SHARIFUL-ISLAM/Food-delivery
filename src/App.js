import "./style.css";
import NavigationBar from "./NavigationBar";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import KacchiBhaiPage from './KacchiBhaiPage';
import ChilloxPage from './ChilloxPage';
import TakeoutPage from './TakeoutPage';
import { isAuthenticated } from './auth';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            {isAuthenticated() ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route exact path="/signup">
            {isAuthenticated() ? <Redirect to="/" /> : <SignUpPage />}
          </Route>
          <Route exact path="/kacchi-bhai">
            <KacchiBhaiPage />
          </Route>
          <Route exact path="/chillox">
            <ChilloxPage />
          </Route>
          <Route exact path="/takeout">
            <TakeoutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
