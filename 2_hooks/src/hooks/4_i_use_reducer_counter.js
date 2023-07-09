import { useReducer } from "react"

const initialState = 0
const reducer = (currentState, action)=>{
    let newState
    switch(action)
    {
        case 'increament': newState = currentState+1; break;
        case 'decreament': newState = currentState-1; break;
        case 'reset': newState = initialState; break;
        default: newState = currentState; break;
    }
    return newState
}

export function UserReducerSimpleCounter()
{
    
    const [count, dispatchCount] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <input type={"button"} value="Increament" onClick={()=>{dispatchCount('increament')}}/>
            <input type={"button"} value="Decreament" onClick={()=>{dispatchCount('decreament')}}/>
            <input type={"button"}value="Reset" onClick={()=>{dispatchCount('reset')}}/>
        </div>
    )
}