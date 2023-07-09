import { Component } from "react";

export class RenderPropsClickCounter extends Component
{
    render()
    {
        const {count, increament} = this.props
        return (
            <div>
                <input type="button" value={`Clicked ${count} times`} onClick={increament}></input>
            </div>
        )
    }
}