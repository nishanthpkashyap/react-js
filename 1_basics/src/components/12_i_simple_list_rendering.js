export function SimpleListRendering()
{
    const names = ["Ash", "Bugs", "Crit"]
    
    return (
        <div>
            {names.map((name)=><h2>Hello {name}</h2>)}
        </div>
    )
}