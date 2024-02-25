import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const Button=({handler, text})=><button onClick={handler}>{text}</button>

const Header=({text})=><h1>{text}</h1>

const StatisticLine=({text, stat})=>{
  if(text==='positive'){
    return(
      <tr><td>{text} {stat} %</td></tr>
    )
  }
  return(
    <tr><td>{text} {stat}</td></tr>
  )
}

const Statistics=({g, n, b})=>{
  const total=g+b+n;
  const average=(g*1+b*-1)/total;
  const positivePercentage=g/total*100;
  
  if(total>0){
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text='good' stat={g}/>
            <StatisticLine text='neutral' stat={n}/>
            <StatisticLine text='bad' stat={b}/>
            <StatisticLine text='all' stat={total}/>
            <StatisticLine text='average' stat={average}/>
            <StatisticLine text='positive' stat={positivePercentage}/>
          </tbody>
        </table>
      </div>
    )
  }

  return(
    
    <div>
      <p>No feedback given</p>
    </div>
  )
  
}

const App=()=>{
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);

  const handleGood=()=>{
    setGood(good+1);
  }

  const handleBad=()=>{
    setBad(bad+1);
  }

  const handleNeutral=()=>{
    setNeutral(neutral+1);
  }

  return(
    <div>

      <Header text={'give feedback'}/>
      <Button handler={handleGood} text={'good'}/>
      <Button handler={handleNeutral} text={'neutral'}/>
      <Button handler={handleBad} text={'bad'}/>
      <Header text={'statistics'}/>
      <Statistics g={good} n={neutral} b={bad}/>
      
    </div>
  );
}

export default App
