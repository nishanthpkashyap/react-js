import React, { Component } from "react";

export class EventBindingInConstructor extends Component
{
    constructor()
    {
        super();
        this.state = {
            message: "Hello!"
        }
        this.printThis = this.printThis.bind(this);        
    }

    printThis()
    {
        this.setState({message: "Thank you!!"});
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="button" value={"Click"} onClick={this.printThis}/>
            </div>
        )
    }
}