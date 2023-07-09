import React from "react"

export function WithoutJSX()
{
    return React.createElement('h1', {id: "Hello", class: "dummyClass"}, "Hello World (without jsx)")
}