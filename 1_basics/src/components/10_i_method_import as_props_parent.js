import React, { Component } from "react";
import { ChildComponent } from "./10_ii_method_import as_props_child";

export class ParentComponent extends Component
{
    constructor()
    {
        super();
        this.state = {
            parentName: "Parent"
        };

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(from)
    {
        alert(`Hello ${this.state.parentName}, greetings from ${from}`)
    }

    render()
    {
        return (
            <div>
                <ChildComponent method={this.greetParent}/>
            </div>
        );
    }
}