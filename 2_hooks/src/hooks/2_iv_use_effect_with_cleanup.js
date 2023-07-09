import { useState } from "react"
import { UseEffectOnlyOnce } from "./2_iii_useEffect_only_once"

export function UseEffectWithCleanUp()
{
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <input type={"button"} value="Toggle Display" onClick={()=>{setDisplay(!display)}}/>
            {display && <UseEffectOnlyOnce/>}
        </div>
    )
}