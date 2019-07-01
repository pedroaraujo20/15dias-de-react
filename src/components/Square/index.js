import React, { Component } from 'react';
import "./styles.css";

export default class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {content: "X"};        
    }

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
