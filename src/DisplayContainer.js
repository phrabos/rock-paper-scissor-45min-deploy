import React, { useState, useEffect } from 'react';
import Controls from './Controls';

const DisplayContainer = () => {
  const [choice, setChoice] = useState('');
  const [choiceSpan, setChoiceSpan] = useState('');
  const [computer, setComputer] = useState('');
  const [computerSpan, setComputerSpan] = useState('');
  const [outcome, setOutcome] = useState('');

  useEffect(() => {
    if(computer === 0) setComputerSpan('rock')
    if(computer === 1) setComputerSpan('paper')
    if(computer === 2) setComputerSpan('scissor')

    if(computer === 0 && choice === 'rock') setOutcome('draw')
    else if(computer === 0 && choice === 'paper') setOutcome('win')
    else if(computer === 0 && choice === 'scissors') setOutcome('lose')
    else if(computer === 1 && choice === 'rock') setOutcome('lose')
    else if(computer === 1 && choice === 'paper') setOutcome('draw')
    else if(computer === 1 && choice === 'scissor') setOutcome('win')
    else if(computer === 2 && choice === 'rock') setOutcome('win')
    else if(computer === 2 && choice === 'paper') setOutcome('lose')
    else if(computer === 2 && choice === 'scissor') setOutcome('draw')
  }, [computer])

  const handleRadio = (e) => {
    setChoice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button', choice);
    setChoiceSpan(choice);
    setComputer(Math.floor(Math.random() * 3))
  }

  const handleReset = () => {
    setOutcome('');
    setComputerSpan('');
    setChoiceSpan('');
  }

  return(
    <>
    <h1>Rock Paper Scissor</h1>
    <Controls 
      choiceSpan={choiceSpan}
      computerSpan={computerSpan}
      computer={computer} 
      handleRadio={handleRadio}
      handleSubmit={handleSubmit}
      outcome={outcome}
      handleReset={handleReset} />
    </>
  ) 
}

export default DisplayContainer;
