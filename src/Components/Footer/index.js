import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Footer() {
    return(
        <footer className="text-center" id="footer">
            <div id="socialIcons">
                <ul>
                    <li>
                        <a href="https://twitter.com/Fyoung_Jr">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/effiong-jr?tab=repositories">
                            <FontAwesomeIcon icon={faGithub} /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/effiong-bassey/">
                            <FontAwesomeIcon icon={faLinkedinIn} /> 
                        </a>
                    </li>
                </ul>
            </div>
            <div id="copy">&copy; Effiong Bassey - {new Date().getFullYear()}</div>
        </footer>
    );
}

export default Footer;