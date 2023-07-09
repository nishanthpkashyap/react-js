import axios from 'axios'
import {useState, useEffect} from 'react'

export function UseEffectDataFetch3()
{
    const [post, setPost] = useState({})
    const [postId, setPostId] = useState(1);
    const [buttonValue, setButtonValue] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonValue}`).then((res)=>{
            console.log(res.data)
            setPost(res.data)
        }).catch((err)=>console.log(err))
    }, [buttonValue])

    return (
        <div>
            <input type="text" value={postId} onChange={(e)=>{setPostId(e.target.value)}} required/>
            <br/><br/>
            <input type={"button"} value="Fetch Data" onClick={()=>{setButtonValue(postId)}} />
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
        </div>
    )
}