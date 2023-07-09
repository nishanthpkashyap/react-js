import React, { Component } from "react";

export class DestructureInsideBody extends Component
{
    constructor()
    {
        super();
        this.state = {
            count: 0
        };
    }

    render()
    {
        const {name, age} = this.props
        const {count} = this.state
        return (
            <div>
                <h1>Hello, {name} of age, {age}, you have clicked {count} times.</h1>
                <button onClick={()=>this.setState({count: this.state.count+1}, ()=>console.log("count", this.state.count))}>Click Me</button>
            </div>
        )
    }
}