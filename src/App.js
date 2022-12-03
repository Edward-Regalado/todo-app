import './App.css';
import React, {useState} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Splash from './pages/SplashPage';
import LoginContext from './context/auth/context';
// import ThemeProvider from './context/settings/Theme/ThemeContext';


function App(props) {

  return (
    <LoginContext auth0={props.auth0}>
     <Router>
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Splash />} />
            ) : (
            <Route path='/' element={<Homepage />} />
            )
          }
        </Routes>
      </Router>
    </LoginContext>
    );
  }

export default App;
