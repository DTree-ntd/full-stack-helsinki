import { useState } from "react"
import Filter from "./components/Filter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [keyword, setKeyword] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`)
    }

    if (!newName || !newNumber) {
      return persons
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }


    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter keyword={keyword} handle={handleFilterChange}/>

      <h2>Add a new</h2>
    
      <PersonForm name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} handleNewPerson={addPerson}/>

      <h2>Numbers</h2>
      
      <Person persons={persons} keyword={keyword}/>
    </div>
  )
}

export default App