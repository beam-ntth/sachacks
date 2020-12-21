/**
 * We have three main pages for the website - please go to the corresponding pages for more info
 * 1. Hero/Main page
 * 2. Resources page
 * 3. Schedule page
 */
import React, { useEffect } from 'react';
import './App.css';

// React Router - Change pages for single page web app
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import different pages here
import Hero from './pages/hero/hero';
import Schedule from './pages/schedule/schedule';
import Resources from './pages/resources/resources';
import LegacyMain from './pages/legacy/main/legacy-main';

// This is for animation
import Aos from 'aos';

function App () {

  // Init the animation to 1200 ms
  useEffect( () => {
    Aos.init( { duration: 1200 } );
  } );

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Redirect the page from sachacks.io/team -> typeform link */}
          <Route path='/team' component={ () => {
            window.location.href = 'https://sachacks.typeform.com/to/r2sYTJ';
            return null;
          } } />
          {/* Switch to different pages here */}
          <Route path="/legacy">
            <LegacyMain />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path='/'>
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
