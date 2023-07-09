import React from "react";

export function UniqueKeyListItem() {
  const persons = [
    {
      name: "Ash",
      age: 22,
      like: "Sports",
    },
    {
      name: "Bugs",
      age: 21,
      like: "Games",
    },
    {
      name: "Crit",
      age: 20,
      like: "Books",
    },
  ];

  const personList = persons.map((person)=><Person key={person.name} person={person}/>)

  return (
    <div>
        {personList}
    </div>
  )
}

function Person({person})
{
    return (
        <h1>Hello {person.name}. Your age is {person.age}. You like {person.like}</h1>
    )
}