import { useEffect, useState } from "react";

export function UseEffectWithIncorrectDependency()
{
    const [count, setCount] = useState(0)

    const increamentCounter = () => {
        setCount((prevState)=>{return prevState + 1})
    }

    useEffect(()=>{
        let interval = setInterval(increamentCounter, 1000)

        return ()=>{
             clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}