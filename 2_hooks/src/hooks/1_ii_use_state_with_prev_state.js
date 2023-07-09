import React, { useState } from 'react'

export function UseStatePrevstate() 
{
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 style={{fontSize: "3rem"}}>Count: {count}</h1>
            <input type="button" value={"Increament"} onClick = {()=>{setCount((prevState)=>prevState + 1)}}/>
            <input type={"button"} value="Reset" onClick = {()=>{setCount(0)}}/>
            <input type={"button"} value="Decreament" onClick = {()=>{setCount((prevState)=>prevState - 1)}}/>
            <input type={"button"} value="Increament by 5" onClick={()=>{
                for(let i=0; i<5; i++)
                    setCount((prevState)=>prevState + 1)
            }}/>
        </div>
    )
}

