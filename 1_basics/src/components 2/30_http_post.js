import {Component} from 'react'
import axios from 'axios'

export class HttpGet extends Component
{
    constructor(props) {
        super(props)
        
        this.state = {
            data: []
        }
    }

    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            this.setState({data: response.data})
        }).catch(err=>{console.log(err)})
    }

    render()
    {
        return(
            <div>
                <h1>Lists of data:</h1>
                <br></br>
                {this.state.data.map(item => { return <h5 key={item.id}>{item.title}</h5>})}
            </div>
        )
    }
}