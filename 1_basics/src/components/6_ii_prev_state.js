import React, { Component, useState } from 'react'

export class SetStatePrevState extends Component 
{

    constructor() 
    {
      super()
      this.state = {
         count: 0
      }
    }

    increament()
    {
        this.setState((prevState, props)=>({count: prevState.count+1}), ()=>console.log(this.state.count));
    }

    increamentFive()
    {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }

    decreament()
    {
        this.setState((prevState, props)=>({count: prevState.count-1}), ()=>console.log(this.state.count));
    }

    decreamentFive()
    {
        this.decreament()
        this.decreament()
        this.decreament()
        this.decreament()
        this.decreament()

    }



    render() 
    {
        return (
            <div>
                <h1>Counter 5</h1>
                <h2>{this.state.count}</h2>
                <input type="button" onClick={()=>this.increamentFive()} value="Increament by 5" style={{margin: "1em"}}/>
                <input type="button" onClick={()=>this.decreamentFive()} value="Decreament by 5" style={{margin: "1em"}}/>
            </div>
        );
    }
}



// export const SetStatePrevState = () =>
// {
//     const [count, increament] = useState(0);
//     const increamentFive = ()=>{
//         increament(count+1)
//         increament(count+1)
//         increament(count+1)
//         increament(count+1)
//         increament(count+1)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <input type="button" value="Increament" onClick={()=>increamentFive()}/>
//         </div>
//     )
// }