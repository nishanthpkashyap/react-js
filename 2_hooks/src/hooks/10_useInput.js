import { useState } from "react";

export function useInput(initialValue)
{
    const [value, setValue] = useState(initialValue)

    const reset = ()=>{
        setValue(initialValue)
    }

    const onChange = (e)=>{
            setValue(e.target.value)
    }

    return [value, onChange, reset]

}