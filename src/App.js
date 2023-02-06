import { useState } from 'react'
import Button from './components/Button'
import Display from './components/Display'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good'></Button>
      <Button handleClick={handleClickNeutral} text='neutral'></Button>
      <Button handleClick={handleClickBad} text='bad'></Button>

      <h1>statistics</h1>
      <Display text='good' value={good}></Display>
      <Display text='neutral' value={neutral}></Display>
      <Display text='bad' value={bad}></Display>
    </div>
  )
}

export default App