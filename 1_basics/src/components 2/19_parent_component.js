import React, { Component } from 'react'
import { PureClassComponents } from './19_pure_components'
import { RegularClassComponent } from './19_regular_class_component'

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
                ParentComponent
                <RegularClassComponent name={this.state.name}></RegularClassComponent>
                <PureClassComponents name={this.state.name}></PureClassComponents>
            </div>
        )
    }
}

