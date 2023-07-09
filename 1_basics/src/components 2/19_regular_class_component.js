import { Component } from "react"
import React from "react"

export class RegularClassComponent extends Component 
{
    // constructor(props) 
    // {
    //     super(props)
    // }

    render() 
    {
        console.log("Regular Component")
        return (
            <div style={{marginTop: "2rem",}}>
                RegularComponent {this.props.name}
            </div>
        )
    }
  }