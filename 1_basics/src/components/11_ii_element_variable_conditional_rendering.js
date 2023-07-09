import React, { Component } from "react";

export class ElementVariableCondRendering extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoggedIn: true
        };
    }

    render()
    {
        let isLoggedIn = this.state.isLoggedIn;
        let message;
        if(isLoggedIn)
            message = "Welcome Admin"
        else    
            message = "Welcome Guest"
        return (
            <div>
                <h1>{message}</h1>
            </div>
        )
    }
}