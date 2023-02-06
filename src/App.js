import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

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

  const totalFeedback = good + neutral + bad;
  const percentPositive = (good / totalFeedback * 100) + ' %';
  const values = {good, neutral, bad, totalFeedback, percentPositive};

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good'></Button>
      <Button handleClick={handleClickNeutral} text='neutral'></Button>
      <Button handleClick={handleClickBad} text='bad'></Button>

      <Statistics values={values}></Statistics>
    </div>
  )
}

export default App