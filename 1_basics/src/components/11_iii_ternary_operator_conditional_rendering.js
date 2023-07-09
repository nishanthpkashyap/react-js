import React, { Component } from "react";

export class TernaryOperatorCondRendering extends Component
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
        return (
            isLoggedIn ? (<h1>Welcome Admin</h1>) : (<h1>Welcome Guest</h1>)
        )
    }
}