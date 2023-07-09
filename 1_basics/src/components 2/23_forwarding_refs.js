import React, { PureComponent } from "react";

export class ForwardRefParent extends PureComponent
{
    constructor(props) {
        super(props)
        this.state = {}
        this.inputRef = React.createRef()
    }

    render()
    {
        return(
            <div>
                <Child ref={this.inputRef}></Child>
                <input type="button" value="Focus" onClick={()=>this.inputRef.current.focus()}/>
            </div>
        )
    }
}

let Child = (props, ref)=>{
    return(
        <div>
            <input type="text" ref={ref} placeholder="Type something" required/>
        </div>
    )
}

export default Child = React.forwardRef(Child)