import React, {Component} from 'react';

export class ClassState extends Component 
{

  constructor()
  {
    super();
    this.state = {
      message: "Welcome User!!"
    }
  }

  changeMessage()
  {
    this.setState({
      message: "Thank you for subscribing!!"
    });
  }

  render()
  {
    return (
        <div>
          <h1>{this.state.message}</h1>
          <input type="button" value = "Subscribe" onClick={() => this.changeMessage()}></input>
        </div>
    );
  }
};