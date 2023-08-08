const PersonForm = ({name, handleName, number, handleNumber, handleNewPerson}) => {
  return (
    <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={name} onChange={handleName} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm