import React, { Component } from "react";

export class EventBindingUsingArrowKeyFunc extends Component
{
    constructor()
    {
        super();
        this.state = {
            message: "Hello!!"
        };
    }

    printThis()
    {
        this.setState({message: "Thank you"})
        console.log("Button pressed")
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="button" value="Click" onClick={()=>this.printThis()}></input>
            </div>
        )
    }
}

// const EventBindingUsingArrowKeyFunc = () => {
//     const [ message,setMessage] = useState('hello');

    
//   return (
//     <div>
//       <h1>{message}</h1>
//       <input
//         type="button"
//         value="Click"
//         onClick={() => {setMessage('thank you')}}
//       ></input>
//     </div>
//   );
// };
// export default EventBindingUsingArrowKeyFunc;
