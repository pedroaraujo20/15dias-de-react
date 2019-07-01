import React from 'react';

import Board from './components/Board/index.js';
import NextPlayer from './components/Nextplayer/index';

const App = () => {
    return (
        <>
            <NextPlayer />
            <Board qtd="9"/>            
        </>
    );
}

export default App;

