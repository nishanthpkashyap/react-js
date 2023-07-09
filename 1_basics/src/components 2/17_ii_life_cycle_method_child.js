import { Component } from "react";

export class ChildLifeCycle extends Component
{
    constructor()
    {
        super()
        this.state = {
            name: "Bugs"
        }
        console.log("Child Constructor")
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("Child getDerivedStateFromProps")
        return null
    }

    componentDidMount()
    {
        console.log("Child ComponentDidMount")
    }

    shouldComponentUpdate(prevProps, prevState)
    {
        console.log("Child shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("Child getSnapShotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("Child componentDidUpdate")
    }

    render()
    {
        console.log("Child render")
        return (
            <div>
                <h1>Child Life Cycle</h1>
                <input type={"button"} value="Change Child State" onClick={()=>this.setState({name: "Parent"})}></input>
            </div>
        )
    }

}