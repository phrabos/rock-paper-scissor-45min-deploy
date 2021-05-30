import React from 'react';

const Controls = ({ choice, computer, handleSubmit }) => {

  return (
    <div>
    <form value={choice} onChange={handleSubmit}>
    <input type='radio' value='rock' name='choice' /><span>Rock</span>
    <input type='radio' value='paper' name='choice' /><span>Paper</span>
    <input type='radio' value='scissors' name='choice' /><span>Scissor</span>
    <button type='submit'>Throw</button>
    </form>
    <p>You picked {choice}, computer picked {computer}</p>
    <p>Outcome: You</p>
    </div>
  )
}

export default Controls;