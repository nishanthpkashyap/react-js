import { Component } from "react"

export class FormHandling extends Component
{

    constructor()
    {
        super();

        this.state = {
            userName: "",
            comments: "",
            topic: "",
        }
        
    }

    changeUserName(event){
        this.setState({userName: event.target.value})
    }

    changeComments(event){
        this.setState({comments: event.target.value})
    }

    changeTopic(event){
        this.setState({topic: event.target.value})
    }

    submitFormData(event){
        alert(`Name: ${this.state.userName}\nComments: ${this.state.comments}\nTopic: ${this.state.topic}`)      
        event.preventDefault();
    }

    render()
    {
        return (
            <div>
                <form>
                    <input type="text" style={{marginTop: "3rem", height:"2rem"}} value={this.state.userName} placeholder="Enter your name:" onChange={(event)=>this.changeUserName(event)}></input>
                    <br></br>
                    <textarea style={{marginTop: "3rem", marginBottom: "2rem"}} placeholder="Enter your comments:" value={this.state.comments} onChange={(event)=>this.changeComments(event)}></textarea>
                    <br></br>
                    Select a Topic of your choice: 
                    <select style={{marginLeft: "1rem"}} value={this.state.topic} onChange={(event)=>this.changeTopic(event)}>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="Spring Boot">Spring Boot</option>
                        <option value="AWS CLOUD">AWS CLOUD</option>
                        <option value="React JS">React JS</option>
                    </select>
                    <br></br>
                    <input type="submit" style={{marginTop: "3rem"}} value="Submit" onClick={(event)=> this.submitFormData(event)}></input>
                </form>
            </div>
        )
    }
}