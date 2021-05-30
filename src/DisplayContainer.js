import React, { useState } from 'react';
import Controls from './Controls';

const DisplayContainer = () => {
  const [choice, setChoice] = useState('rock');
  const [computer, setComputer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setChoice(e.target.value);
    setComputer(Math.floor(Math.random() * 3))
  }



  return(
    <>
    <h1>Rock Paper Scissor</h1>
    <Controls choice={choice} computer={computer} handleSubmit={handleSubmit} />
    </>
  ) 
}

export default DisplayContainer;
