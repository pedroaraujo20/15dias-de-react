import React, {Component} from 'react';

import './styles.css';
import Nextplayer from '../Nextplayer';
import Board from '../Board';

class GameWrapper extends Component {
    state = {player: ""};

    handleClick = () => {
        this.setState({player: this.state.player === "X" ? "O" : "X"})
    }

    render () {
        return (
            <main className="game-wrapper">
                <Nextplayer player={this.state.player} />
                <Board onClick={this.handleClick}/>
            </main>
        );
    }
}

export default GameWrapper;