import React from 'react';
import './NewsTile.css';

const newstile = (props) => (
    <div className='NewsTile'>
        <div className='Image'></div>
        <div className='Newslines'>
            <h5>{props.title}</h5>
            <p>Tomatoe Stuffe with and Chanterelles</p>
        </div>        
    </div>   
);

export default newstile;