import React, { useCallback, useState } from "react";
import _useCallback_title from "./5_useCallback_title";
import _useCallback_count from "./5_useCallback_count";
import _useCallback_button from "./5_useCallback_button";


function UseCallbackParent() 
{
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const increamentAge = useCallback(()=>{
        setAge((prevState)=>prevState+1)
    }, [age])

    const increamentSalary = useCallback(()=>{
        setSalary((prevState)=>prevState+1000)
    }, [salary])

    return (
        <div>
            <_useCallback_title/>
            <_useCallback_count text="Age" count={age}/>
            <_useCallback_button method={increamentAge} text="Increament Age"/>
            <_useCallback_count text="Salary" count={salary}/>
            <_useCallback_button method={increamentSalary} text="Increament Salary"/>

        </div>
    )
}

export default React.memo(UseCallbackParent)