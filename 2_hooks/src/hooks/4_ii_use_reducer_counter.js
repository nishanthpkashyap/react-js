import { useReducer } from "react";

const initialState = {
    "firstCount": 0,
}
const reducer = (currentState, action)=> {
    let newState
    switch(action.type)
    {
        case 'increament': newState = {firstCount: currentState.firstCount + action.value}; break;
        case 'decreament': newState = {firstCount: currentState.firstCount - action.value}; break;
        case 'reset': newState = {firstCount: initialState.firstCount}; break;
        default: newState = {firstCount: currentState.firstCount}; break;
    }
    return newState
}

export function UseReducerComplexCounter()
{
    const [count, dispatchCount] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count.firstCount}</h1>
            <input type={"button"} value="Increament" onClick={()=>{dispatchCount({type: 'increament', value: 1})}}/>
            <input type={"button"} value="Decreament" onClick={()=>{dispatchCount({type: 'decreament', value: 1})}}/>
            <input type={"button"} value="Increament 5" onClick={()=>{dispatchCount({type: 'increament', value: 5})}}/>
            <input type={"button"} value="Decreament 5" onClick={()=>{dispatchCount({type: 'decreament', value: 5})}}/>
            <input type={"button"}value="Reset" onClick={()=>{dispatchCount({type: 'reset'})}}/>
        </div>
    )
}