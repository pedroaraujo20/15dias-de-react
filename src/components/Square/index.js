import React from 'react';
import "./styles.css";

const handleClick = texto => () => alert(texto);

const Square = () => (
    <button className="square" onClick={handleClick("Aeee")}>X</button>
);

export default Square;