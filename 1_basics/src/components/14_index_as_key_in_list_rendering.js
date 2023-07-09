export function IndexAsKey()
{
    const names = ['Ash', 'Bugs', 'Crit', 'Dip', 'Bugs']
    const nameList = names.map((name, index)=><h1 key={index}>{name}</h1>)
    return (
        <div>
            {nameList}
        </div>
    )
} 