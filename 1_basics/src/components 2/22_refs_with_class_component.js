import React, { PureComponent } from "react";

export class ClassRef extends PureComponent
{
    constructor()
    {
        super()
        this.state = {}
        this.componentRef = React.createRef()
    }

    callChildMethod()
    {
        this.componentRef.current.focusInputComponent()
    }

    render()
    {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <input type="button" value={"Focus"} onClick={()=>this.callChildMethod()}/>
            </div>
        )
    }
}

class Input extends PureComponent
{
    constructor(props) 
    {
        super(props)
        this.state = {}
        this.inputRef = React.createRef()
    }

    focusInputComponent()
    {
        this.inputRef.current.focus()
    }

    render()
    {
        return (
            <div style={{marginTop: "3rem"}}>
                <input type="text" ref={this.inputRef} placeholder="Enter your name:" required/>
            </div>
        )
    }
}