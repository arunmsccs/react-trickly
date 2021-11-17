import React from 'react';
import './Input.css';

const input = (props) => (
    <input type='text' placeholder={props.placeholder} style={{height: props.height, width: props.width}}/>
);

export default input;