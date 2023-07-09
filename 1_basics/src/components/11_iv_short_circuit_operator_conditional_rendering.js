import React, { Component } from "react";

export class ShortCircuitCondRendering extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoggedIn: false,
            // name: ""
        };
    }

    render()
    {
        return (
            <div>
                {this.state.isLoggedIn && <h1>Welcome Admin</h1>}
            </div>
        )
    }
}

            // <div>
            //     <br></br>
            //     <input type="text" name="name" id="name" placeholder="Enter your name:" required></input>
            //     <br></br><br></br>
            //     <input type="button" value="submit" onClick={()=>{this.setState({name: document.getElementById("name").value, isLoggedIn: true})}}/>
            //     {this.state.isLoggedIn && <h1>Welcome {this.state.name}</h1>}
            // </div> 