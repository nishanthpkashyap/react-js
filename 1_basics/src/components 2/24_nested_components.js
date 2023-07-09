import { PureComponent } from "react";
import { ContextConsumer } from "./24_context";

export class A extends PureComponent
{
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    render()
    {
        return(
            <div>
                <B></B>
            </div>
        )
    }
}

class B extends PureComponent
{
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    render()
    {
        return(
            <div><C></C></div>
        )
    }
}

class C extends PureComponent
{
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    render()
    {
        return(
            <div>
                <ContextConsumer>
                    {
                        (value)=>{
                            return <h1>Hello {value}</h1>
                        }
                    }
                </ContextConsumer>
            </div>
        )
    }
}

