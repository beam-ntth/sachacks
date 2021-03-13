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
import Lovelace from './pages/lovelace20201/lovelace';

// This is for animation
import Aos from 'aos';
import Prev2020 from './pages/prev-years/2020/prev-2020';
import Prev2018 from './pages/prev-years/2018/prev-2018';

// Import Google Analytics component for React Router
import Analytics from 'react-router-ga';

function App () {

  // Init the animation to 1200 ms
  useEffect( () => {
    Aos.init( { duration: 1200 } );
  } );

  return (
    <Router>
      <Analytics id="UA-192047191-1">
        <div className="App">
          <Switch>
            {/* Redirect the page from sachacks.io/team -> typeform team application link */}
            <Route path='/team' component={ () => {
              window.location.href = 'https://sachacks.typeform.com/to/r2sYTJ';
              return null;
            } } />

            {/* Redirect the page from sachacks.io/apply -> typeform hacker application link */}
            <Route path='/apply' component={ () => {
              window.location.href = 'https://sachacks.typeform.com/to/zGQawsSI';
              return null;
            } } />

            {/* Redirect the page from sachacks.io/mentor -> typeform mentor application link */}
            <Route path='/mentor' component={ () => {
              window.location.href = 'https://sachacks.typeform.com/to/SXaHQrRC';
              return null;
            } } />

            {/* Redirect the page from sachacks.io/guide -> Guide for Hackers page */}
            <Route path='/guide' component={ () => {
              window.location.href = 'https://www.notion.so/SacHacks-2021-Hacker-Guide-3f88879a709f4aa89f658e07490309ac';
              return null;
            } } />

            {/* Redirect the page from sachacks.io/guide -> Guide for Hackers page */}
            <Route path='/submission' component={ () => {
              window.location.href = 'https://www.instagram.com/tv/CLiP9pkD6sa/?utm_source=ig_web_copy_link';
              return null;
            } } />

            {/* Switch to different pages here */}
            <Route path="/lovelace">
              <Lovelace />
            </Route>
            <Route path='/2021'>
              <Hero />
            </Route>
            <Route path="/2020">
              <Prev2020 />
            </Route>
            <Route path='/2018'>
              <Prev2018 />
            </Route>
            <Route path="/schedule">
              <Schedule />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/">
              <LegacyMain />
            </Route>

          </Switch>
        </div>
      </Analytics>
    </Router>
  );
}

export default App;
