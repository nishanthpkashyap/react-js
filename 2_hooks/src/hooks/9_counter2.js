import React from "react";
import { useCounter } from "./9_useCounter";

export function UseCounter2()
{
    const [count, increament, decreament, reset] = useCounter(10, 2)

    return (
        <div>
            <h2>{count}</h2>
            <input type={"button"} value="Increament" onClick={increament}/>
            <input type={"button"} value="Decreament" onClick={decreament}/>
            <input type={"button"} value="Reset" onClick={reset}/>
        </div>
    )
}