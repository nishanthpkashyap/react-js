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

export function MultplipleUserReducerCounter()
{
    
    const [count, dispatchCount] = useReducer(reducer, initialState)
    const [count2, dispatchCount2] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{count}</h1>
            <input type={"button"} value="Increament" onClick={()=>{dispatchCount('increament')}}/>
            <input type={"button"} value="Decreament" onClick={()=>{dispatchCount('decreament')}}/>
            <input type={"button"}value="Reset" onClick={()=>{dispatchCount('reset')}}/>
            <h1>{count2}</h1>
            <input type={"button"} value="Increament" onClick={()=>{dispatchCount2('increament')}}/>
            <input type={"button"} value="Decreament" onClick={()=>{dispatchCount2('decreament')}}/>
            <input type={"button"}value="Reset" onClick={()=>{dispatchCount2('reset')}}/>
        </div>
    )
}