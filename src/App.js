import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`)
    }

    if (!newName || !newNumber) {
      return persons
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch(error => {
          alert(
            `the person is not exist`
          )
        })
    }
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

      <Person persons={persons} keyword={keyword} handleRemovePerson={removePerson}/>
    </div>
  )
}

export default App