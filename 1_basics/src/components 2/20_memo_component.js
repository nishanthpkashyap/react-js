import React from 'react'

function MemoComponent({name}) 
{
  console.log("Memo Component")
  return (
    <div style={{marginTop: "2rem",}}>
      <h3>{name}</h3>
    </div>
  )
}

export default React.memo(MemoComponent)

