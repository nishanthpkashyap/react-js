import React, {Fragment} from 'react'

export function ListFragment()
{
    let items = ["Ash", "Bugs", "Crit", "Dig"]

    return (
        <>
            {items.map((item, index)=> <Fragment key={index}>
                <h1>Name: </h1>
                <h3>{item}</h3>
            </Fragment>)}
        </>
    )
}