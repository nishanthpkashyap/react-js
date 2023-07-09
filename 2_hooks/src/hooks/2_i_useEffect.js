import {useState, useEffect} from 'react'

export function UseEffect()
{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("change")
        document.title = `Clicked ${count} times`
    })


    return (
        <div>
            <input type="button" value={`Clicked ${count} times`} onClick={()=> setCount((prevState)=> prevState + 1)}/>
        </div>
    )
}