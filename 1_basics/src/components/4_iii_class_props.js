import React, { Component } from "react";

export class ClassProps extends Component
{
    render()
    {
        return (
            <div>
                <h1>Class Props received are:<br></br>Name: {this.props.name}<br></br>Age: {this.props.age}</h1>
            </div>
        );
    }
}