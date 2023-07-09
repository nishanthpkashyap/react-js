import { Component } from "react";
import { ChildLifeCycle } from "./17_ii_life_cycle_method_child";

export class ParentLifeCycle extends Component
{
    constructor()
    {
        super()
        this.state = {
            name: "Bugs"
        }
        console.log("Parent Constructor")
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("Parent getDerivedStateFromProps")
        return null
    }

    componentDidMount()
    {
        console.log("Parent ComponentDidMount")
    }

    shouldComponentUpdate(prevProps, prevState)
    {
        console.log("Parent shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("Parent getSnapShotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("Parent componentDidUpdate")
    }

    render()
    {
        console.log("Parent render")
        return (
            <div>
                <h1>Parent Life Cycle</h1>
                <input type={"button"} value="Change Parent State" onClick={()=>this.setState({name: "Parent"})}></input>
                <ChildLifeCycle></ChildLifeCycle>
            </div>
        )
    }

}