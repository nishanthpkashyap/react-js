import React, {useContext} from "react"
import { Context1 } from "./3_i_use_context_api"

export function A()
{
    const context = useContext(Context1);
    const count = context.countState
    const dispatch = context.countDispatch
    return (
        <div>
            <div>
                <h1>Component A</h1>
                <h2>{count}</h2>
                <input type="button" value="Increament" onClick={()=>{dispatch("increament")}}/>
                <input type="button" value="Decreament" onClick={()=>{dispatch("decreament")}}/>
                <input type="button" value="Reset" onClick={()=>{dispatch("reset")}}/>
        </div>
        </div>
    )
}

export function B()
{
    return (
        <div>
            <D/>
        </div>
    )
}

export function C()
{
    return (
        <div>
            <E/>
        </div>
    )
}

function D()
{
    const context = useContext(Context1);
    const count = context.countState
    const dispatch = context.countDispatch
    return (
        <div>
            <div>
                <h1>Component D</h1>
                <h2>{count}</h2>
                <input type="button" value="Increament" onClick={()=>{dispatch("increament")}}/>
                <input type="button" value="Decreament" onClick={()=>{dispatch("decreament")}}/>
                <input type="button" value="Reset" onClick={()=>{dispatch("reset")}}/>
        </div>
        </div>
    )
}

function E()
{
    return (
        <div>
            <F/>
        </div>
    )
}

function F()
{
    const context = useContext(Context1);
    const count = context.countState
    const dispatch = context.countDispatch
    return (
        <div>
            <div>
                <h1>Component F</h1>
                <h2>{count}</h2>
                <input type="button" value="Increament" onClick={()=>{dispatch("increament")}}/>
                <input type="button" value="Decreament" onClick={()=>{dispatch("decreament")}}/>
                <input type="button" value="Reset" onClick={()=>{dispatch("reset")}}/>
        </div>
        </div>
    )
}
