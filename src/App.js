import React from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
