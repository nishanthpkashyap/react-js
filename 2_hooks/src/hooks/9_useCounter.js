import { useState } from 'react'

export function useCounter(initialCount = 0, value = 1)
{
    const [count, setCount] = useState(initialCount)

    const increament = ()=>{
        setCount(prevState=>prevState + value)
    }

    const decreament = ()=>{
        setCount(prevState=>prevState - value)
    }

    const reset = ()=>{
        setCount(initialCount)
    }

    return [count, increament, decreament, reset]
}