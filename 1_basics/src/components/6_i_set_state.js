import React, { Component } from 'react';

export class SetState extends Component
{
    constructor()
    {
        super();
        this.state = {
            count: 0
        };
    }

    increament()
    {
        this.setState({count: this.state.count + 1}, () => console.log(this.state.count));
    }

    decreament()
    {
        this.setState({count: this.state.count - 1}, () => console.log(this.state.count));
    }

    render()
    {
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <input type="button" value="Increament" onClick={()=>this.increament()}></input> {/*onClick={() => this.setState({count: this.state.count+1}, ()=>console.log(this.state.count))} style={{margin: "1em"}}*/}
                <input type="button" value="Decreament" onClick={()=>this.decreament()}></input> {/*onClick={() => this.setState({count: this.state.count-1}, ()=>console.log(this.state.count))} style={{margin: "1em"}}*/}
            </div>
        );
    }
} 