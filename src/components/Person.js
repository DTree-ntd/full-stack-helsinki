const Person = ({ persons, keyword }) => {
  return (
    <ul>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase())).map(person => 
           <li>{person.name} {person.number}</li>
        )}
      </ul>
    </ul>
  )
}

export default Person