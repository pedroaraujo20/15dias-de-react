import React from 'react';

import Board from './components/Board/index.js';
import NextPlayer from './components/Nextplayer/index';
import GameWrapper from './components/GameWrapper/index.js';

const App = () => {
    return (
        <GameWrapper>
            <NextPlayer />
            <Board qtd="9"/>            
        </GameWrapper>
    );
}

export default App;

