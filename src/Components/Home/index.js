import React from 'react';
import me from '../../assets/images/me.jpg'

import './index.css';

function Home() {
    return(
        <div>            
            <div className="img-container mx-auto d-block">
                <img className="img-fluid mx-auto d-block" src={me} alt="myImage" />
            </div>
            <div className="welcome text-center">
                <p>Welcome to my personal piece of the internet.</p>
            </div>
        </div>
    );
}

export default Home;