import React from 'react';
import './Box.css';

const box = (props) => (
   <div className='Box' style={{border: props.border, padding: props.padding}}>
       {props.children}
   </div>
);

export default box;