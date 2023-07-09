import { Component } from "react";

export class RenderPropsHoverCounter extends Component
{
    render()
    {
        const {count, increament} = this.props
        return (
            <div>
                <h1 onMouseOver={increament}>Clicked {count} times</h1>
            </div>
        )
    }
}