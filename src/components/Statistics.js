import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const {good, neutral, bad, totalFeedback, percentPositive} = props.values;

  if(totalFeedback === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good}></StatisticLine>
      <StatisticLine text='neutral' value={neutral}></StatisticLine>
      <StatisticLine text='bad' value={bad}></StatisticLine>
      <StatisticLine text='all' value={totalFeedback}></StatisticLine>
      <StatisticLine text='positive' value={percentPositive}></StatisticLine>
    </div>
  )
}
 
export default Statistics