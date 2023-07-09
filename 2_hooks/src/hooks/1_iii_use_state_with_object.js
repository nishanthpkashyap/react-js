import { useState } from "react";

export function UseStateWithObject()
{
    const [name, setName] = useState({first: '', last: ''});

    return(
        <div>
            <input type={"text"} value={name.first} placeholder="Enter your first name" onChange={(e)=>{return setName({...name, first: e.target.value})}}/>
            <input type={"text"} value={name.last} placeholder="Enter your last name" onChange={(e)=>{return setName({...name, last: e.target.value})}}/>
            <h1>Hello {name.first} {name.last}</h1>
            <h2>{JSON.stringify(name, null, 2)}</h2>
        </div>
    )
}