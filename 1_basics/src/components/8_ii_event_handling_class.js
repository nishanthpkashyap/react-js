import React, { Component } from "react";

export class EventHandlingClass extends Component
{

    onClickEventHandler()
    {
        console.log("Button Clicked");
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input type="button" value="Click Me" onClick={this.onClickEventHandler}></input>
            </div>
        )
    }
}