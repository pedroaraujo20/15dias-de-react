import React from 'react';
import './styles.css';

import Square from '../Square/index';

const Board = ({qtd}) => {
    return (
        <article className="board">
            <Square />
        </article>       
    );
}

export default Board;