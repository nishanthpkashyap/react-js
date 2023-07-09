import React, { Component } from "react";

export class EventBindingUsingBindMethod extends Component
{
    constructor()
    {
        super();
        this.state = {
            "message": "Hello!!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
        }
    };

    printThis()
    {
        console.log(this)
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="button" value={"Click"} onClick={this.printThis.bind(this)}></input>
            </div>
        );
    }
}