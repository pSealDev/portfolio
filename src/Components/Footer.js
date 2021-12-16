import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div id="footer_copy">@priscilla seal {new Date().getFullYear()} 
            all rights reserved &nbsp;
            <i class="fab fa-github"></i>&nbsp;&nbsp;
            <i class="fab fa-linkedin"></i>&nbsp;&nbsp;
            <i class="fas fa-code"></i>&nbsp;&nbsp;
            </div>
        </div>
    );
}

export default Footer;