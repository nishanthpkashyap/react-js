import React from "react";

export function ChildProps(props)
{
    return (
        <div style={{"marginBottom": "2em"}}>
            <h1>Hello {props.name}, Your Age is {props.age}</h1>
            {props.children}
        </div>
    );
}