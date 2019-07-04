import React, { Component } from 'react';
import "./styles.css";

class Square extends Component {
    state = {content: ""};        
    

    handleClick = () => {
       const state = this.state.content;
       const newState = {};
       state === "X" ? newState.content = "O" : newState.content = "X"; 
       this.setState(newState);      
    }

    render() {
        return (
            <button className="square" onClick={this.handleClick}>{this.state.content}</button>
        );
    }
}

export default Square;
