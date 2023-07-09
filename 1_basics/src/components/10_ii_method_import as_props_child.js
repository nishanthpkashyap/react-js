import React from "react";

export function ChildComponent({method}) 
{
    return (
        <div>
            <input type="button" value="Click" onClick={()=>method("child")}></input>
        </div> 
    );
}
