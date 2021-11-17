import React from 'react';

import TricklyLogo from '../../assets/images/trickly.png';
import './Logo.css';

const logo = (props) => (
    <div className='Logo'>
        <img src={TricklyLogo} alt="Trickly" /> 
        <h1>Trickly</h1>
    </div>
);

export default logo;