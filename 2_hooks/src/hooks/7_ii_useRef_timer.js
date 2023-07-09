import React, {useEffect, useRef, useState} from "react";

export function UseRefTimer()
{
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    
    useEffect(()=>{
        //componentDidUpdate()
        intervalRef.current = setInterval(()=>{
            setTimer((prevState)=>prevState+1)
        }, 1000)

        //componentWillUnmount()
        return ()=>{
            clearInterval(intervalRef.current)
        }
    }, []);
    return (
        <div>
            Timer - {timer} <br/><br/>
            <input type={"button"} value="Clear Interval" onClick={()=>clearInterval(intervalRef.current)}/>
        </div>
    )
}