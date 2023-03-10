const Filter = ({keyword, handle}) => {
  return (
    <form>
      <div>
        filter shown with<input value={keyword} onChange={handle} />
      </div>
    </form>
  )
}

export default Filter