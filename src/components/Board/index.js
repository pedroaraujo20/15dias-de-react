import React, {Component} from 'react';
import './styles.css';

import Square from '../Square/index';

class Board extends Component {      

    createSquares = () => {
        const squares = Array(9).fill();
    
        return squares.map(
            (square, index) => (
            <Square key={index}
            onClick={this.props.onClick}
            />
        )
      );  
    }
    render ()  {
        return (
            <article className="board">
                {this.createSquares()}
            </article>       
        )
    };
};

export default Board;