import React from 'react'
const Buttons = ({setResult, result}) => {

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value))
  }
  const clearHandler = () => {
    setResult("")
  }
  const deleteHandler = () => {
    setResult(result.slice(0, -1))
  }
  const calculateHandler = () => {
    try {
      setResult(eval(result))
    }catch(err) {
      setResult("Error")
    }
  }
  return (
    <div className='grid-container'>
      <button value="7" onClick={clickHandler}>7</button>
      <button value="8" onClick={clickHandler}>8</button>
      <button value="9" onClick={clickHandler}>9</button>
      <button onClick={deleteHandler}>DEL</button>
      <button value="4" onClick={clickHandler}>4</button>
      <button value="5" onClick={clickHandler}>5</button>
      <button value="6" onClick={clickHandler}>6</button>
      <button value="+" onClick={clickHandler}>+</button>
      <button value="1" onClick={clickHandler}>1</button>
      <button value="2" onClick={clickHandler}>2</button>
      <button value="3" onClick={clickHandler}>3</button>
      <button value="-" onClick={clickHandler}>-</button>
      <button value="." onClick={clickHandler}>.</button>
      <button value="0" onClick={clickHandler}>0</button>
      <button value="/" onClick={clickHandler}>/</button>
      <button value="x" onClick={clickHandler}>x</button>
      <button className='span' onClick={clearHandler}>RESET</button>
      <button className='span' onClick={calculateHandler}>=</button>
    </div>
  )
}

export default Buttons
