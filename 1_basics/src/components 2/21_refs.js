import React, { Component } from "react";

export class Refs extends Component
{
    constructor(props) {
        super(props)

        this.state = {}
        
        this.inputRef = React.createRef()
    }

    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    render()
    {
        return (
            <div style={{"marginTop": "3rem",}}>
                <input type="text" ref={this.inputRef} placeholder="Enter your Name:" required/>
                <br></br><br></br>
                <input type="button" value="Submit" onClick={()=> {this.setState({name: this.inputRef.current.value})}}/>
                {this.state.name && <h1>Name: {this.state.name}</h1>}
            </div>
        )
    }
}