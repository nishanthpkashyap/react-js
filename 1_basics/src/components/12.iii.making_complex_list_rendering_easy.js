export function MakingComplexListRenderingEasy()
{
    const persons = [
        {
            name: "Ash",
            age: 22,
            like: 'Sports'
        },
        {
            name: "Bugs",
            age: 21, 
            like: 'Games'
        },
        {
            name: 'Crit',
            age: 20,
            like: 'Book'
        }
    ];

    const personList = persons.map(person => <Person person={person}/>);

    return (
        <div>{personList}</div>
    )
}
 
function Person({person})
{
    return (
        <h1>Hello {person.name}. Your age is {person.age}. You like {person.like}.</h1>
    )
}