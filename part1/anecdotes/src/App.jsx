import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'

const Header=({text})=> <h1>{text}</h1>

const Button=({handler, text})=> <button onClick={handler}>{text}</button>

const Anecdote=({text})=><p>{text}</p>

const Votes=({number})=> <p>has {number} votes</p>

const App=()=>{
  const anecdotes=[
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'The best way to get a project done faster is to start sooner',
    'How does a project get to be a year late?... One day at a time.',
    'Prolific programmers contribute to certain disaster.',
    "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it."
  ]
  const anecdoteLen=anecdotes.length;
  const [vote, setVote]= useState(new Array(anecdoteLen).fill(0));

  const [select, setSelected]=useState(0);

  const [maxVote, setMaxVote]=useState(0);

  const getRandomNumber=(num)=>{
    return Math.floor(Math.random()*num);
  }

  const handleClick=()=>{
    const index=getRandomNumber(anecdoteLen);
    console.log(index);
    setSelected(index);
  }

  const handleVote=()=>{
    var copy=[...vote];
    copy[select]++;
    console.log(copy)
    setVote(copy);

    const maximum=Math.max(...copy);
    console.log(maximum);
    setMaxVote(maximum);
  }

  return(
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote text={anecdotes[select]}/>
      <Votes number={vote[select]}/>
      <Button text='next anecdote' handler={handleClick}/>
      <Button text='vote' handler={handleVote}/>
      <Header text="Anecdote with most votes"/>
      <Anecdote text={anecdotes[vote.indexOf(maxVote)]}/>
      <Votes number={maxVote}/>
    </div>
  );
}

export default App
