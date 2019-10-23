import React from 'react';
import me from '../../assets/images/me.jpg'

import './index.css';

function Home() {
    return(
        <div className='home-container'>            
            <div className="img-container mx-auto d-block">
                <img className="img-fluid mx-auto d-block" src={me} alt="myImage" />
            </div>
            <div className="text-center">
                <p className="welcome">Welcome to my personal piece of the internet.</p>
                <p><a href="https://drive.google.com/open?id=1qvynZZgw7sez7VGZ_9Gn6ELsdbb2UnNA">Resume</a></p>
                
            </div>
        </div>
    );
}

export default Home;