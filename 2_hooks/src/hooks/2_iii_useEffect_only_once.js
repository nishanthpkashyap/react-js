import { useEffect, useState } from "react"

export function UseEffectOnlyOnce()
{
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const printMouseCood = (e)=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("inside useEffect")
        window.addEventListener("mousemove", printMouseCood)   
        
        return ()=>{
            console.log("Component unmount")
            window.removeEventListener("mousemove", printMouseCood)
        }
    }, [])

    return (
        <div>
            <h3>X - {x}  Y - {y}</h3>
        </div>
    )
}