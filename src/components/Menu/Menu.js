import React, { useState } from 'react';
import Menuicon from '../../assets/images/menu-icon.png';
import Socialmedia from '../../assets/images/social-media.png';
import './Menu.css';

const menu = (props) => {
    const [mobile, setMobile] = useState(false);
    const handleToggle = () => {
        setMobile(!mobile) 
    }
    return(
        <nav>
        <div className={mobile? 'NavContainer Mobile' :'NavContainer'}>
            <div className='MenuIcon'>
                <img src={Menuicon} alt="menu" onClick={handleToggle}/>
            </div>
            <div className='Menu'>
                <ul>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Features</li>
                    <li>Courses</li>
                    <li>Shop</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='Social'>
                <img src={Socialmedia} alt="social media" />
            </div> 
        </div>     
    </nav>
    );
};

export default menu;