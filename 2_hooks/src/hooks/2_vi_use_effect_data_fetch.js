import axios from 'axios'
import {useState, useEffect} from 'react'

export function UseEffectDataFetch1()
{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res)
            setPosts(res.data)
        }).catch((err)=>console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map((item)=>{
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}