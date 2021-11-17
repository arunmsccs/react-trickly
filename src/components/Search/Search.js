import React from 'react';
import SearchIcon from '../../assets/images/search.png';
import './Search.css';

const search = (props) => (
    <div className='Search'>
        <input type='text' placeholder='Search Foods' />
        <button><img src={SearchIcon} alt='search' /></button>
    </div>
    
);

export default search;