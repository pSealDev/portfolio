import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div id="footer_copy">@priscilla seal {new Date().getFullYear()} , 
            all rights reserved &nbsp;
           <a href="https://github.com/pSealDev"><i class="fab fa-github"></i></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/priscillaseal/"><i class="fab fa-linkedin"></i></a>&nbsp;&nbsp;
            </div>
        </div>
    );
}

export default Footer;