import React from 'react';
import Logo from '../Logo/Logo';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instaround.png';
import Pintrest from '../../assets/images/pintrest.png';
import Twitter from '../../assets/images/twitter.png';
import Phone from '../../assets/images/phone.png';
import './Footer.css';

const footer = (props) => (
    <footer>  
        <div className='FooterLogo'>
            <Logo />
        </div>

        <div className='FooterContent'>
            <div>
                <h3>About Us</h3>
                <p>Sorem ipsum dolor amet consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam</p>
                <img src={Facebook} alt='Facebook' />
                <img src={Instagram} alt='Instagram' />
                <img src={Pintrest} alt='Pintrest' />
                <img src={Twitter} alt='Twitter' />
            </div>
            <div>
                <h3>Quick Links</h3>
                <p>Latest News<br />
                    Our Popular Menm<br />
                    Pricing Plan<br />
                    Service & Settings<br />
                    Our Upcoming Food<br />
                    Client’s Reviews</p>
                   
            </div>
            <div>
                <h1>Don’t Hesited 
                To Contact With
                Us Say Hello</h1>
                <br />
                
                <p> <img src={Phone} alt='Phone' valign='middle' />  012 (345) 67899</p>
            </div>
        </div>
        <div className='CopyRight'>@copy 2020. Trickly All Right Reserved</div>
    </footer>
);

export default footer;