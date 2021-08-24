import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default function Nav() {
    return (
    <ul>
        <li>Home</li>
        <li><a href="#about">About me</a></li>
        <li>My projects</li>
    </ul>
    );
}