import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import ContactUs from './components/contact-us';
import Home from './components/home';
import Header from './components/header';
import Register from './components/register';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Home path='/' />
        <ContactUs path='contact-us' />
        <Register path='register' />
      </Router>
    </Fragment>
  );
}

export default App;
