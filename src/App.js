import { useState } from "react"
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [keyword, setKeyword] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`)
    }

    if (!newName || !newPhone) {
      return persons
    }

    const nameObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    }


    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <div>
          filter shown with<input value={keyword} onChange={handleFilterChange} />
        </div>
      </form>

      <h2>Add a new</h2>
      
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase())).map(person => 
            <Person key={person.id} person={person} />
          )}
        </ul>
      </ul>
    </div>
  )
}

export default App