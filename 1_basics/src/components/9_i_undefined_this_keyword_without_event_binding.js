import React, { Component } from "react";

export class UndefinedThisKeyWord extends Component
{
    constructor()
    {
        super()
        this.state = {
            message: "Hello!!"
        }
    }

    printThis()
    {
        console.log(this);  //consoles "undefined" because "this" is not binded to the event handler
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="button" value="Click" onClick={this.printThis}></input>
            </div>
        )
    }
}