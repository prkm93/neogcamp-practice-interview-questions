import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FontModifer from './components/FontModifer';
import HeadingModifier from './components/HeadingModifier';
import ColorModifier from './components/ColorModifier';
import PasswordChecker from './components/PasswordChecker';

function App() {

  return (
    <main>
      <section className="menu section">
        {/* <Router>
          <Switch>
            <Header/>
            <Route path="/">This is home</Route>
            <Route path="/about" exact component={Calculator}/> 
            <Route path="/topics">topics</Route> 
          </Switch>
        </Router> */}
        <Calculator/>
        <FontModifer/>
        <HeadingModifier/>
        <ColorModifier/>
        <PasswordChecker/>
      </section>
    </main>
  )
}

export default App;
