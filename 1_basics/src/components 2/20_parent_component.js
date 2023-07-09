import React, { Component } from 'react'
import MemoComponent from './20_memo_component'

export class ParentClassComponent extends Component 
{
    constructor(props) 
    {
        super(props)
    
        this.state = {
            name: "Ash"
        }
    }

    componentDidMount()
    {
        setInterval(()=>{this.setState({name: "Ash"})}, 2000)
    }

    render() 
    {
        console.log("Parent Component")
        return (
            <div style={{marginTop: "2rem",}}>
                <h3>ParentComponent</h3>
                <MemoComponent name={this.state.name}></MemoComponent>
            </div>
        )
    }
}

