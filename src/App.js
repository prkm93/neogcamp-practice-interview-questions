import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      </section>
    </main>
  )
}

export default App;
