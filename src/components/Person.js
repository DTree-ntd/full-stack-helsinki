const Person = ({ persons, keyword, handleRemovePerson }) => {
  return (
    <ul>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase())).map(person => 
           <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleRemovePerson(person)}>delete</button>
          </li>
        )}
      </ul>
    </ul>
  )
}

export default Person