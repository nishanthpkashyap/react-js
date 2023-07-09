import axios from 'axios'
import {useState, useEffect} from 'react'

export function UseEffectDataFetch2()
{
    const [post, setPost] = useState({})
    const [postId, setPostId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>{
            console.log(res.data)
            setPost(res.data)
        }).catch((err)=>console.log(err))
    }, [postId])

    return (
        <div>
            <input type="text" value={postId} onChange={(e)=>{setPostId(e.target.value)}} required/>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
        </div>
    )
}