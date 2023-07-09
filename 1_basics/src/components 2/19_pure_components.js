import React, { PureComponent } from "react"

export class PureClassComponents extends PureComponent
{
   // constructor(props) 
   // {
   //    super(props)
   // }

   render()
   {
      console.log("Pure Component")
      return (
         <div style={{marginTop: "2rem",}}>
            Pure Component {this.props.name}
         </div>
      )
   }
}




