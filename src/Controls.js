import React from 'react';

const Controls = ({ choiceSpan, computerSpan, outcome, handleRadio, handleSubmit, handleReset }) => {

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>
      <input onChange={handleRadio} type='radio' value='rock' name='choice' />Rock
    </label>
    <label>
      <input onChange={handleRadio} type='radio' value='paper' name='choice' />Paper
    </label>
    <label>
      <input onChange={handleRadio} type='radio' value='scissor' name='choice' />Scissor
    </label>
    <button type='submit'>Throw</button>
    </form>
    <p>You picked {choiceSpan}, computer picked {computerSpan}</p>
    <p>Outcome: You {outcome}</p>
    <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Controls;