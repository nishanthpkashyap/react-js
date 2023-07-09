import React, { Component } from 'react'

export class ErrorBoundary extends Component 
{

    constructor(props) {
        super(props)
        
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error)
    {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info)
    {
        console.log(error)
        console.log(info)
    }

    render() 
    {
        if(this.state.hasError)
        {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                </div>
            )
        }

        return this.props.children;
    }
}



export function Hero({name}) {
    if(name === "Joker")
    {
        throw new Error("Not a hero")
    }
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

