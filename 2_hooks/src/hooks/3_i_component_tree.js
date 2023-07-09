import { ContextConsumer1, ContextConsumer2 } from "./3_i_use_context_api"
export function C()
{
    return (
        <div>
            <E></E>
        </div>
    )
}

function E()
{
    return (
        <div>
            <F></F>
        </div>
    )
}
function F()
{
    return (
        <div>
            <ContextConsumer1>
                {
                    (userName)=>{
                        return (
                            <ContextConsumer2>
                                {
                                    (teamName)=>{
                                        return ( <div>
                                            <h2>Hello, {userName}. Welcome to team {teamName}</h2>
                                        </div>
                                        )
                                    }
                                }
                            </ContextConsumer2>
                        )
                    }
                }
            </ContextConsumer1>
        </div>
    )
}

 