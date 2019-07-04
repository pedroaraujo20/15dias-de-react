import React, { Component }from 'react';
import './styles.css';

class Nextplayer extends Component {
    state = { content: "" }
    render () {
        return (
            <p className="next">Next player: {this.state.content}</p>
        ); 
    }
} 

export default Nextplayer;