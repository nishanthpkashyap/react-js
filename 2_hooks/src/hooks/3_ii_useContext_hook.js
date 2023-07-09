import React, {useContext} from "react";
import { ContextConsumer1, ContextConsumer2 } from "./3_i_use_context_api";

export function X()
{
    return (
        <Y/>
    )
}

function Y()
{
    return (
        <Z/>
    )
}

function Z()
{
    const userName = useContext(ContextConsumer1)
    const teamName = useContext(ContextConsumer2)

    return (
        <div>
            <h2>Hello, {userName}. Welcome to {teamName}</h2>
        </div>
    )
}