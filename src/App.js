import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";

import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="container col-sm-8 col-xs-12">
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component ={About} />
            <Route path='/projects' component ={Projects} />
            <Route path='/contact' component={Contact} />
            <Redirect to="/" />

          </Switch>

        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
