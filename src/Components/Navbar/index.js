import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

function Navbar() {
    return (
        <nav id="navigationBar">
            <header className="text-center">
                <h1 id="name">Effiong Bassey</h1>
                <p id="intro">Frontend Web Developer based in Lagos, Nigeria.</p>
            </header>
            <div id="nav-container" className="col-sm-8">
                <ul id="navList" className="text-center">
                    <li>
                        <Link to="/portfolio">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;