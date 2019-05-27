import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <header>
        <Navbar></Navbar>
      </header>
      <div id="main">
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </Fragment>
  </Router>
);

export default App;
