import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Header.css';

const header = (props) => (
    <header>
        <div>
            <ul>
            <li>About</li>
            <li>Setting</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div><Logo /></div>
        <div className="Right">
           <Button text='Create Account' radius='5px' /> 
        </div>      
    </header>
);

export default header;