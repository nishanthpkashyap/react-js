import React, {useState} from 'react'

export function UseStateCounter()
{
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <input type="button" value={"increament"} onClick={()=>setCount(count+1)}/>
        </div>
     )

}

// export class UseStateClassCounter extends PureComponent
// {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//             count: 0
//         }
//     }

//     render()
//     {
//         return (
//             <div>
//                 <h1>Counter</h1>
//                 <h1 ref={this.counterRef} style={{fontSize: "5rem"}}>{this.state.count}</h1>
//                 <input type="button" value="Increament" onClick={()=>{this.setState({count: this.state.count + 1})}}></input>
//             </div>
//         )
//     }
// }