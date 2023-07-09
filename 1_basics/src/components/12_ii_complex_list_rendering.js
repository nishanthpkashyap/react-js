export function ComplexListRendering()
{
    const persons = [
        {
            name: "Ash",
            age: 22,
            like: "Sports"
        },
        {
            name: "Bugs",
            age: 21,
            like: "Games"
        },
        {
            name: "Crit",
            age: 20,
            like: "Books"
        }
    ]

    // const personList = persons.map((person)=> <h1>Hello {person.name}. Your age is {person.age}. You like {person.like}</h1>)

    return (
        <div>{persons.map((person)=> <h1>Hello {person.name}. Your age is {person.age}. You like {person.like}</h1>)}</div>
    )
}