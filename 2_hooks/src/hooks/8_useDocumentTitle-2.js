import React, {useState} from "react";
import { useDocumentTitle } from "./8_useDocumentTitle_custom_hook";

export function UseDocumentTitleCustomHook2()
{
    const [count, setCount] = useState(0)

    useDocumentTitle(count)
    const increamentCount = ()=>{
        setCount((prevState)=>prevState + 1)
    }

    return (
        <div>
            <input type={"button"} value={`Count - ${count}`} onClick={increamentCount}/>
        </div>
    )
}