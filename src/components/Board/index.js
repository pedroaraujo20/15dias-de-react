import React from 'react';
import './styles.css';

import Square from '../Square/index';

const createSquares = () => {
    const squares = Array(9).fill();

    return squares.map(() => <Square />)
}

const Board = () => {
    return (
        <article className="board">
            {createSquares()}
        </article>       
    );
}

export default Board;