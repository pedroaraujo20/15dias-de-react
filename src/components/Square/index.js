import React, { Component } from 'react';
import "./styles.css";

export default class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {status: "X"};        
    }

    handleClick = () => {
       let state = this.state.status;
       state === "X" ? this.setState({status: "O"}) : this.setState({status: "X"});       
    }

    render() {
        return (
            <button className="square" onClick={this.handleClick}>{this.state.status}</button>
        );
    }
}
