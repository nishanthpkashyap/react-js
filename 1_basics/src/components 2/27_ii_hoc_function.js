import { Component } from "react";
import React from "react";

export function HOCFunction(OriginalComponent, num)
{
    class Counter extends Component
    {
        constructor(props)
        {
            super(props)
            this.state = {
                count: 0
            }
        }

        increamentCounter = () => {
            this.setState((prevState)=>{
                return {count: prevState.count+num}
            })
        }

        render()
        {
            // console.log(this.props.name)
            return (
                <div>
                    <OriginalComponent count={this.state.count} increament={this.increamentCounter} {...this.props}/>
                </div>
            )
        }
    }
    return Counter
}