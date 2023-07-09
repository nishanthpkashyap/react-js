import React from 'react'

function UseCallbackTitle() 
{
    console.log("Rendering title")
  return (
    <h1>UseCallback Hook</h1>
  )
}

export default React.memo(UseCallbackTitle)