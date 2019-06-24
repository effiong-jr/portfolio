import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
          
        <Route path='/' exact component={Home} />
        <Route path='/about' component ={About} />
        <Route path='/projects' component ={Projects} />
        <Route path='/contact' component={Contact} />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
