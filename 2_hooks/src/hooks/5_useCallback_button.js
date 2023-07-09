import React from "react";

function UseCallbackButton({method, text})
{
    console.log("Rendering button -", text)
    return (
        <div>
            <input type="button" value={text} onClick={method}/>
        </div>
    )
}

export default React.memo(UseCallbackButton)