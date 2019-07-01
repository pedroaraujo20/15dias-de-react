import React from 'react';

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
        <article>
            {completeBoard(qtd)}
        </article>       
    );
}

export default Board;