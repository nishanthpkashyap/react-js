import React, { Component } from "react";

export class IfElseCondtionalRendering extends Component
{

    constructor()
    {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    render()
    {
        let isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn)
        {
            return (
                <h1>Welcome Admin</h1>
            );
        }
        else
        {
            return (
                <h1>Welcome Guest</h1>
            )
        }
    }
}