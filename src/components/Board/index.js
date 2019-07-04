import React from 'react';
import './styles.css';

import Square from '../Square/index';

const completeBoard = qtd => {
    let max = qtd;
    const squares = [];

    while(max--) {
        squares.push(<Square key={max}/>);
    }
    return squares;
}

const Board = ({qtd}) => {
    return (
        <article className="board">
            {completeBoard(qtd)}
        </article>       
    );
}

export default Board;