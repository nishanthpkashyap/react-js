import React, {useReducer, useEffect} from "react";
import axios from "axios";

const initialPost = {id: "", title: "", body: ""}
const reducer = (currentState, action)=>{
    return {
        id: action.id,
        title: action.title,
        body: action.body
    }
}

export function FetchDataUseReducer()
{
    const [post, dispatch] = useReducer(reducer, initialPost)

    useEffect(()=>{
        axios.get("https://jsonplaceholdr.typicode.com/posts/1").then((res)=>{
            console.log(res.data)
            dispatch({id: res.data.id, title: res.data.title, body: res.data.body})
        }).catch((err)=>console.log(err))
    }, []);

    return (
        <div>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
        </div>
    )
}