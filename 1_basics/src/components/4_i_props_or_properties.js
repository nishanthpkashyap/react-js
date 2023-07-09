import React from "react";

export function Props(props) {
  const age = Number(props.age) + 10;
  return (
    <div style={{"marginBottom": "3em", "marginTop": "2em"}}>
      <h1>Hello {props.name}
      <br></br>Your age is {age}</h1>
    </div>
  );
}
