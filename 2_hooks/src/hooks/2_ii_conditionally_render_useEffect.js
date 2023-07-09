import { useEffect, useState } from "react"

export function ConditionallyRenderUseEffect()
{
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log("changes to document title");
        document.title = `Clicked ${count} times`
    }, [count]) //when count changes, document's title should change

    return (
        <div>
            <input type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type="button" value={`Clicked ${count} times`} onClick={()=>{setCount((prevState)=>prevState+1)}}/>
        </div>
    )
}