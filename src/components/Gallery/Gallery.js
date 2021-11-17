import React from 'react';
import Instagram from '../../assets/images/instagram.png'
import './Gallery.css';

const gallery = (props) => (
    <section className='Gallery'>
        <div></div>
        <div style={{backgroundColor: '#f2262a'}}>
            <div className='Insta'>
                <img src={Instagram} alt='Instagram' />
            </div>
        </div>
        <div></div>
        <div style={{backgroundColor: '#bcbcbc'}}></div>
        <div></div>
        <div style={{backgroundColor: '#bcbcbc'}}></div>
    </section>
);

export default gallery;