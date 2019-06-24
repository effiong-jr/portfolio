import React from 'react';
import './index.css';

function Navbar() {
    return (
        <nav id="navigationBar">
            <header className="text-center">
                <h1 id="name">Effiong Bassey</h1>
                <p>Frontend web developer based in Calabar.</p>
            </header>
            <div id="nav-container" className="col-xs-12 col-md-6">
                <ul id="navList">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;