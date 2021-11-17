import React from 'react';
import './Button.css';

const button = (props) => (
    <button type="button" style={{width: props.width, backgroundColor: props.bgcolor, borderRadius: props.radius}}>
        {props.text}
    </button>
);

export default button;