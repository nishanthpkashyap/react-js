import React, {useMemo, useState} from "react";

export function UseMemo()
{
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const increamentCounter1 = ()=>{
        setCounter1((prevState)=>prevState+1)
    }

    const increamentCounter2 = ()=>{
        setCounter2((prevState)=>prevState+1)
    }

    const isEven = useMemo(()=>{
        let i
        while(i<9000000000)i++
        return counter1%2 === 0 ? true : false
    }, [counter1]);

    return (
        <div>
            <input type={'button'} value={`Counter 1 ${counter1}`} onClick={increamentCounter1}/> {isEven ? "Even" : "Odd"}<br/><br/>
            <input type={'button'} value={`Counter 2 ${counter2}`} onClick={increamentCounter2}/> 
        </div>
    )
}