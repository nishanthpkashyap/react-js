import React, {useState} from 'react'

export function UseStateWithArray()
{
    const [items, setItems] = useState([]);
    const addItem = ()=>{
        setItems([...items, {
            "id": items.length,
            "value": Math.ceil(Math.random()*100)
        }])
    }
    return (
        <div>
            <input type={"button"} onClick={addItem} value="Add an Number Item"/>
            <ul>
                {
                    items.map((item)=>{
                        console.log("id: ", item.id)
                        return <li key={item.id}>{item.value}</li>
                    })
                }
            </ul>
        </div>
    ) 
}