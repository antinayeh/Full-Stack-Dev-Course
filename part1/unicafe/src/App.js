import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}{props.percentage}</td>
    </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return(
      <div>
        <h3>statistics</h3>
        <p> No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h3>statistics</h3>
    <table>
      <tbody>
        <StatisticLine name="good" value={props.good} percentage=""/>
        <StatisticLine name="neutral" value={props.neutral} percentage=""/>
        <StatisticLine name="bad" value={props.bad} percentage=""/>
        <StatisticLine name="all" value={props.all} percentage=""/>
        <StatisticLine name="average" value={props.avg.toFixed(1)} percentage=""/>
        <StatisticLine name="positive" value={props.pos.toFixed(2)} percentage="%"/> 
      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

    const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedAll = updatedGood + neutral + bad
    setGood(updatedGood)
    setAll(updatedAll)
    setAvg((updatedGood - bad)/updatedAll)
    setPos((updatedGood/updatedAll) * 100)
  }

  const handleNeutralClick = () => {
    const updatedNeutral= neutral + 1
    const updatedAll = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAvg((good - bad) / updatedAll)
    setPos((good/updatedAll) * 100)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedAll = good + neutral + updatedBad
    setBad(updatedBad)
    setAll(updatedAll)
    setAvg((good - updatedBad) / updatedAll)
    setPos((good/updatedAll) * 100)

  }
  
  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos} />
    </div>
  )
}

export default App