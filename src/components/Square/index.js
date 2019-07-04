import React from 'react';
import "./styles.css";

const Square = ({content, onClick}) => (
        <button 
            onClick={onClick}
            className="square"
        >
            {content}   
        </button>
);
    
    


export default Square;
