import React from "react";

export function EventHandlingFunction()
{
    function eventHandler()
    {
        console.log("Button Pressed");
    }

    return (
        <div>
            <input type="button" value="Click Me" onClick={eventHandler}></input>
        </div>
    );
}